class StartView extends BaseView {
    #startButtonElement;

    constructor(domElement) {
        super(domElement);

        this.handlerClickButton = null;

        this.#startButtonElement = document.getElementById('start-button');
        this.#startButtonElement.addEventListener('touchstart', () => this.handlerClickButton(), {passive: true});
        this.#startButtonElement.addEventListener('mousedown', () => this.handlerClickButton());
    }

    bindStartClickButton(handler) {
        this.handlerClickButton = handler;
    }
}