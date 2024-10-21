class StartView extends BaseView {
    #startButtonElement;

    constructor(domElement) {
        super(domElement);

        this.handlerClickButton = null;

        this.#startButtonElement = document.getElementById('start-button');
        
        this.#startButtonElement.addEventListener("click", (event) => {
            event.preventDefault();
            this.handlerClickButton(); 
        });

        this.#startButtonElement.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.handlerClickButton(); 
        }, 
        {passive: false});
    }

    bindStartClickButton(handler) {
        let talk = new SpeechSynthesisUtterance("Hola");
        //window.speechSynthesis.speak(talk);
        this.handlerClickButton = handler;
    }
}