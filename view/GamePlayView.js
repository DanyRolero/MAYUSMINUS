class GamePlayView {
    #viewElement;
    #questionCharElement;
    #answersCharsElement;
    #resultMessageElement;

    constructor() {
        this.handleButtonClick;
    }

    //---------------------------------------------------------------------------------
    updateQuestionChartContent(content) {
        this.#questionCharElement.textContent = content;
    }

    //---------------------------------------------------------------------------------
    addAnswerCharButton(content) {
        let answerCharButton = document.createElement('button');
        answerCharButton.textContent = content;
        answerCharButton.addEventListener('click', () => this.handleButtonClick(answerCharButton));
        this.#answersCharsElement.appendChild(answerCharButton);
    }

    //---------------------------------------------------------------------------------
    addAnswerCharsButtons(contentList) {
        for(let i = 0; i < contentList.length; i++) this.addAnswerCharButton(contentList[i]);
    }

    //---------------------------------------------------------------------------------
    removeCharsButtons() {
        this.#answersCharsElement.innerHTML = '';
    }

    //---------------------------------------------------------------------------------
    disbledCharFailedButton(button) {
        button.disabled = true;
        button.classList.add('button-disabled');
    }
    
    //---------------------------------------------------------------------------------
    veryGoodResultMessage() {
        this.#resultMessageElement.classList.remove('try-again-message');
        this.#resultMessageElement.classList.add('very-good-message');
        this.#resultMessageElement.textContent = 'MUY BIEN';
    }

    //---------------------------------------------------------------------------------
    tryAgainResultMessage() {
        this.#resultMessageElement.classList.remove('very-good-message');
        this.#resultMessageElement.classList.add('try-again-message');
        this.#resultMessageElement.textContent = 'OTRA VEZ';
    }

    //---------------------------------------------------------------------------------
    removeResultMessage() {
        this.#resultMessageElement.textContent = '';
    }

    //---------------------------------------------------------------------------------
    // Para enlazar el evento click de los botones con el controlador
    bindButtonClick(handler) {
        this.handleButtonClick = handler;
    }
}