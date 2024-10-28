class GameView extends BaseView {
    #questionStatenent = null;
    #answerChoices = null;

    constructor(domElement) {
        super(domElement);

        this.handleButtonClick;
        this.handlerQuestionTouch;

        this.#questionStatenent = document.getElementById('current-char-question');
        this.#questionStatenent.addEventListener('touchstart', () => this.handlerQuestionTouch(), {passive: false});

        this.#answerChoices = document.getElementById('current-chars-answers');
    }

    //---------------------------------------------------------------------------------
    updateQuestionStatement(content) {
        this.#questionStatenent.textContent = content;
    }

    //---------------------------------------------------------------------------------
    addAnswerChoice(content) {
        let answerCard = document.createElement('div');
        answerCard.classList.add('card-container');
        answerCard.addEventListener('touchstart', () => { this.handleButtonClick(answerCard);}, {passive:true});
        answerCard.addEventListener('touchend', (event) => event.preventDefault(), {passive:false}); //Prevenir zoom del doble tap
        this.#answerChoices.appendChild(answerCard);       

        let cardCharContainer = document.createElement('div');
        cardCharContainer.classList.add('card-char-container');
        answerCard.appendChild(cardCharContainer);

        let cardCharContent = document.createElement('div');
        cardCharContent.classList.add('card-char-content');
        cardCharContainer.appendChild(cardCharContent)
        
        cardCharContent.textContent = content;
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

    bindQuestionTouch(handler) {
        this.handlerQuestionTouch = handler;
    }
}