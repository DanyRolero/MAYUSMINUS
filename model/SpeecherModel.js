class SpeecherModel {
  constructor(onComplete = () => {}) {
    this.speechSynth = null;
    this.voices = [];
    this.loadVoicesWhenAvalables(onComplete);
  }

  //---------------------------------------------------------------------------------
  speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.4;
    this.speechSynth.speak(utterance);
  }

  //---------------------------------------------------------------------------------
  loadVoicesWhenAvalables(onComplete = () => {}) {
    this.speechSynth = window.speechSynthesis;
    this.voices = this.speechSynth.getVoices();
    
    if(this.voices.length !== 0) {
        console.log('voces cargadas');
        onComplete();
    } else {
        return setTimeout(() => { this.loadVoicesWhenAvalables(onComplete)}, 100);
    }
  }
}
