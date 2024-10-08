class ExerciseView extends AbstractView {
    #questionStatenent = null;
    #answerChoices = null;

    //---------------------------------------------------------------------------------
    constructor(domElement) {
        super(domElement);
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
        answerCharButton.classList.add('alphabet');

        this.#answerChoices.appendChild(answerCharButton);       
    }

    //---------------------------------------------------------------------------------
    addAnswerChoiceGroup(contentList) {
        for(let i = 0; i < contentList.length; i++) this.addAnswerCharButton(contentList[i]);        
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
}