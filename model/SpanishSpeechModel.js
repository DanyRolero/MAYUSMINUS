class SpanishSpeechModel {
    #synth = window.speechSynthesis;
    #voicesLoaded = false;
    #voices = [];
    #speech = null;

    constructor() {
        this.#synth.onvoiceschanged = this.loadVoices.bind(this);
        this.#speech = new SpeechSynthesisUtterance();
        this.#speech.lang = 'es-ES'; 
        this.#speech.pitch = 1;
        this.#speech.rate = 0.4;
        this.#speech.volume = 1;
        this.#speech.voice = this.#voices[0];
    }
   
    //---------------------------------------------------------------------------------
    loadVoices() {
        console.log('Voces cargadas');
        this.#voicesLoaded = true;
        this.#voices = this.#synth.getVoices();

        //Seleccionar solo voces en español
        let spanishVoices = [];
        this.#voices.forEach((voice) => {
            if(voice.lang == 'es-ES') spanishVoices.push(voice);
        });
        console.log(spanishVoices);
        
    }

    //---------------------------------------------------------------------------------
    speak(text) {
        if(!this.#voicesLoaded) return;
        this.#speech.text = text;
        this.#synth.speak(this.#speech); 
    }
}