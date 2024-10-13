class SpeakerBaseModel {
    #lang = '';
    #speech = null;
    #synth = null;
    #voices = [];
    #currentVoice = null;

    //---------------------------------------------------------------------------------
    constructor(lang) {
        this.#lang = lang;

        this.#speech = new window.SpeechSynthesisUtterance();
        this.#speech.pitch = 1;
        this.#speech.rate = 0.5;
        this.#speech.volume = 1;
        this.#speech.lang = lang;

        this.#synth = window.speechSynthesis;
        this.#synth.onvoiceschanged = this.#loadVoices.bind(this);
    }

    //---------------------------------------------------------------------------------
    #loadVoices() {
        this.#synth.getVoices().forEach((voice) => {
            if(voice.lang == this.#lang) this.#voices.push(voice);
        });
        
        this.#speech.voice = this.#voices[0];
        console.log(this.#speech.voice);
        console.log(this.#voices);
        
        
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
}