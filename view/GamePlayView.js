class GamePlayView {
    #questionCharElement;
    #answersCharsElement;
    #resultMessageElement;

    constructor() {
        this.handleButtonClick;
        this.#questionCharElement = document.getElementById('current-char-question');
        this.#resultMessageElement = document.getElementById('result-message');
        this.#answersCharsElement = document.getElementById('current-chars-answers');
    }

    //---------------------------------------------------------------------------------
    updateQuestionChartContent(content, upperCase = true) {
        if(upperCase) content = content.toUpperCase();
        this.#questionCharElement.textContent = content;
    }

    //---------------------------------------------------------------------------------
    addAnswerCharButton(content, upperCase = false) {
        let answerCharButton = document.createElement('button');

        if(upperCase) content = content.toUpperCase();
        answerCharButton.textContent = content;
        answerCharButton.addEventListener('click', () => this.handleButtonClick(answerCharButton));
        answerCharButton.classList.add('alphabet');
        this.#answersCharsElement.appendChild(answerCharButton);
    }

    //---------------------------------------------------------------------------------
    addAnswerCharsButtons(contentList, upperCase = false) {
        for(let i = 0; i < contentList.length; i++) this.addAnswerCharButton(contentList[i], upperCase);
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