class SpeecherModel {

  //---------------------------------------------------------------------------------
  speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}