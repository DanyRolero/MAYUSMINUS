class RestartMenuView {
    #viewElement;
    #restartButtonElement;
    #reviseButtonElement;
    
    constructor() {
        this.handlerRestartClickButton = null;
        this.handlerReviseClickButton = null;

        this.#viewElement = document.getElementById('restart-menu-view');
        this.#viewElement.classList.add('hidden');

        this.#restartButtonElement = document.getElementById('restart-button');
        this.#restartButtonElement.addEventListener('clcik', () => this.handlerRestartClickButton());

        this.#reviseButtonElement = document.getElementById('revise-button');
        this.#reviseButtonElement.addEventListener('click', () => this.handlerReviseClickButton());
        this.#reviseButtonElement.classList.add('hidden');
    }

    //---------------------------------------------------------------------------------
    showView() {
        this.#viewElement.classList.remove('hidden');
    }

    //---------------------------------------------------------------------------------
    hideView() {
        this.#viewElement.classList.add('hidden');
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