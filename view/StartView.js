class StartView extends BaseView {
    #startButtonElement;

    constructor(domElement) {
        super(domElement);

        this.handlerClickButton = null;

        this.#startButtonElement = document.getElementById('start-button');

        this.#startButtonElement.addEventListener("click", (event) => {
            this.handlerClickButton(); 
        });
    }

    bindStartClickButton(handler) {
        this.handlerClickButton = handler;
    }
}