class GamePlayView {
    #viewElement;
    #questionCharElement;
    #answersCharsElement;

    constructor() {
        this.handleButtonClick;

        this.#viewElement = document.getElementById('gameplay-view');
        this.#questionCharElement = document.getElementById('current-char-question');
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
    hideView() {
        this.#viewElement.classList.add('hidden');
    }

    //---------------------------------------------------------------------------------
    showView() {
        this.#viewElement.classList.remove('hidden');
    }

    //---------------------------------------------------------------------------------
    hideAnswersButtons() {
        this.#answersCharsElement.classList.add('hidden');
    }

    //---------------------------------------------------------------------------------
    showAnswersButtons() {
        this.#answersCharsElement.classList.remove('hidden');
    }

    //---------------------------------------------------------------------------------
    // Para enlazar el evento click de los botones con el controlador
    bindButtonClick(handler) {
        this.handleButtonClick = handler;
    }
}