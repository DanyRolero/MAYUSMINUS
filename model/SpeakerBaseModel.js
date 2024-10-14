class SpeakerBaseModel {
    #lang = '';
    #speech = null;
    #synth = null;
    #voices = [];

    //---------------------------------------------------------------------------------
    constructor(lang) {
        this.#lang = lang;

        this.#speech = new window.SpeechSynthesisUtterance();
        this.#speech.pitch = 1;
        this.#speech.rate = 0.5;
        this.#speech.volume = 1;
        this.#speech.lang = lang;

        this.#synth = window.speechSynthesis;
        
    }

    //---------------------------------------------------------------------------------
    #loadVoices() {
        this.#synth.getVoices().forEach((voice) => {
            if(voice.lang == this.#lang) this.#voices.push(voice);
        });        
        this.#speech.voice = this.#voices.find((voice) => voice.name.includes('Mónica'));        
    }
    
    //---------------------------------------------------------------------------------
    speak(text) {
        if(this.#voices.length == 0) {
            console.warn('Not voices for ' + this.#lang);
            return;
        }
        this.#speech.text = text;
        this.#synth.speak(this.#speech);
    }

    //---------------------------------------------------------------------------------
    onLoadVoices(handler) {
        let self = this;
        if(this.#voices.length > 0) {
            this.#loadVoices();
            handler();
            return;
        }

        this.#synth.onvoiceschanged = function() {
            self.#loadVoices();
            handler();
        }

    }
}