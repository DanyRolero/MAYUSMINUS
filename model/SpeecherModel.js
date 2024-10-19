class SpeecherModel {
  
  //---------------------------------------------------------------------------------
  speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }
}