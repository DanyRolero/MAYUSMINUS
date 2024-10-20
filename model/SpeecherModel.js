class SpeecherModel {

  //---------------------------------------------------------------------------------
  speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.4;
    speechSynthesis.speak(utterance);
  }
}