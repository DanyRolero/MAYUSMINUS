class RestartMenuView extends BaseView {
    #restartButtonElement;
    #reviseButtonElement;
    
    constructor(domElement) {
        super(domElement);
        this.handlerRestartClickButton = null;
        this.handlerReviseClickButton = null;

        this.#restartButtonElement = document.getElementById('restart-button');
        this.#restartButtonElement.addEventListener('touchstart', () => this.handlerRestartClickButton(), {passive: true});

        this.#reviseButtonElement = document.getElementById('revise-button');
        this.#reviseButtonElement.addEventListener('touchstart', () => this.handlerReviseClickButton(), {passive: true});
        this.#reviseButtonElement.classList.add('hidden');
    }

    onHide() {
        this.hideReviseButton();
    }

    //---------------------------------------------------------------------------------
    showReviseButton() {
        this.#reviseButtonElement.classList.remove('hidden');
    }

    //---------------------------------------------------------------------------------
    hideReviseButton() {
        this.#reviseButtonElement.classList.add('hidden');
    }

    //---------------------------------------------------------------------------------
    bindRestartClickButton(handler) {
        this.handlerRestartClickButton = handler;
    }

    //---------------------------------------------------------------------------------
    bindReviseClickButton(handler) {
        this.handlerReviseClickButton = handler;
    }
}