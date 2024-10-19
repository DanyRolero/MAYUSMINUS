class SpeecherModel {
  
  //---------------------------------------------------------------------------------
  speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = function(event) {
        console.log('Síntesis de voz iniciada');
      };
      utterance.onend = function(event) {
        console.log('Síntesis de voz finalizada');
      };
      speechSynthesis.speak(utterance);
      console.log('Síntesis de voz ejecutada');
  }
}