class RestartMenuView extends BaseView {
    #restartButtonElement;
    #reviseButtonElement;
    
    constructor(domElement) {
        super(domElement);
        this.handlerRestartClickButton = null;
        this.handlerReviseClickButton = null;

        this.#restartButtonElement = document.getElementById('restart-button');
        this.#restartButtonElement.addEventListener('click', () => this.handlerRestartClickButton());

        this.#reviseButtonElement = document.getElementById('revise-button');
        this.#reviseButtonElement.addEventListener('click', () => this.handlerReviseClickButton());
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