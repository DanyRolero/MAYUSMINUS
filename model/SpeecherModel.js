class SpeecherModel {
  
  //---------------------------------------------------------------------------------
  constructor() {
    this.voices = [];
    this.lang = 'es-Es';
    this.voice = null;
    let handler = this.setVoices.bind(this);
    window.speechSynthesis.onvoiceschanged = function() { 
        handler();
    }


    //this.voices = window.speechSynthesis.getVoices();
    //if(this.voices.length > 0) handler();

    //window.speechSynthesis.onvoiceschanged = function() {
      //this.voices = window.speechSynthesis.getVoices();
      //handler();
    //}
  }

  //---------------------------------------------------------------------------------
  speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }

  //---------------------------------------------------------------------------------
  setVoices() {
    this.voices = window.speechSynthesis.getVoices();
  }
}