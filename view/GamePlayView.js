class GamePlayView extends BaseView {
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

        answerCharButton.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.handleButtonClick(answerCharButton)},
            {passive: false});
        
        answerCharButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleButtonClick(answerCharButton)}, 
            {passive: false} );

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
    // STYLES CSS
    //---------------------------------------------------------------------------------
    disabledAnswerChoice(button) {
        button.disabled = true;
        button.classList.add('button-disabled');
    }

    //---------------------------------------------------------------------------------
    setQuestionStatementTextTransform(textTransform = 'uppercase') {
        let varsCSS = document.querySelector(':root');
        varsCSS.style.setProperty('--Question-statement-text-transform', textTransform);
    }

    //---------------------------------------------------------------------------------
    setAnswerChoiceTextTransform(textTransform = 'lowercase') {
        let varsCSS = document.querySelector(':root');
        varsCSS.style.setProperty('--Answer-choice-text-transform', textTransform);
    }

    //---------------------------------------------------------------------------------
    setChallengeFont(font) {
        let varCSSfont = document.querySelector(':root');
        varCSSfont.style.setProperty('--font-chars', font);
    }

    //---------------------------------------------------------------------------------
    setCorrectAnswerChoiceStyle(button) {
        button.classList.add('correct-press-button');
    }


    //---------------------------------------------------------------------------------
    // BINDS
    //---------------------------------------------------------------------------------
    // Para enlazar el evento click de los botones con el controlador
    bindButtonClick(handler) {
        this.handleButtonClick = handler;
    }
}