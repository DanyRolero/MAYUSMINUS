class GamePlayView extends AbstractView {
    #questionStatenent = null;
    #answerChoices = null;

    constructor(domElement) {
        super(domElement);

        this.handleButtonClick;

        this.#questionStatenent = document.getElementById('current-char-question');
        this.#answerChoices = document.getElementById('current-chars-answers');
    }

    //---------------------------------------------------------------------------------
    updateQuestionStatement(content) {
        this.#questionStatenent.textContent = content;
    }

    //---------------------------------------------------------------------------------
    addAnswerChoice(content) {
        let answerCharButton = document.createElement('button');
        answerCharButton.textContent = content;
        answerCharButton.addEventListener('click', () => this.handleButtonClick(answerCharButton));

        this.#answerChoices.appendChild(answerCharButton);       
    }

    //---------------------------------------------------------------------------------
    addAnswerChoiceGroup(contentList) {
        for(let i = 0; i < contentList.length; i++) this.addAnswerChoice(contentList[i]);        
    }

    //---------------------------------------------------------------------------------
    removeAnswerChoices() {
        while(this.#answerChoices.firstChild) {
            this.#answerChoices.removeChild(this.#answerChoices.firstChild);
        }
    }

    //---------------------------------------------------------------------------------
    disabledAnswerChoice(button) {
        button.disabled = true;
        button.classList.add('button-disabled');
    }

    //---------------------------------------------------------------------------------
    // Para enlazar el evento click de los botones con el controlador
    bindButtonClick(handler) {
        this.handleButtonClick = handler;
    }
}