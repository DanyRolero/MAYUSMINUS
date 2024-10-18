class SpeecherModel {

  constructor() {
    this.voices = window.speechSynthesis.getVoices;
    window.speechSynthesis.onvoiceschanged = () => this.voices = window.speechSynthesis.getVoices();
  }

    speak(text) {
      let utterance = new SpeechSynthesisUtterance(text);
      let voices = window.speechSynthesis.getVoices();
      console.log(voices);
      
      speechSynthesis.speak(utterance);
    }
  }