class StartView extends BaseView {
    #startButtonElement;

    constructor(domElement) {
        super(domElement);

        this.handlerClickButton = null;

        this.#startButtonElement = document.getElementById('start-button');
        this.#startButtonElement.addEventListener('touchstart', (e) => {this.handlerClickButton(); e.preventDefault();}, {passive: false});
    }

    bindStartClickButton(handler) {
        this.handlerClickButton = handler;
    }
}