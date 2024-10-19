class SpeecherModel {
  
  //---------------------------------------------------------------------------------
  constructor(handler) {
    this.voices = [];
    this.lang = 'es-Es';

    //this.voices = window.speechSynthesis.getVoices();
    //if(this.voices.length > 0) handler();

    window.speechSynthesis.onvoiceschanged = function() {
      this.voices = window.speechSynthesis.getVoices();
      handler();
    }
  }

  //---------------------------------------------------------------------------------
  speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }
}