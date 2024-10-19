class SpeecherModel {
  
  //---------------------------------------------------------------------------------
  constructor() {
    this.voices = [];
    this.lang = 'es-Es';
    this.voice = null;
  }

  //---------------------------------------------------------------------------------
  speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }
}