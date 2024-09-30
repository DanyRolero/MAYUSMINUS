class GamePlayController {
    constructor() {
        this.question;
        this.answers = [];
        this.fails = [];

        //---------------------------------------------------------------------------------
        // MODELS
        //---------------------------------------------------------------------------------
        this.abcQuestions = new AlphabetModel2();
        this.abcAnswers = new AlphabetModel2();
        this.abcFails = new AlphabetModel2();
        this.options = new OptionsModel();

        //---------------------------------------------------------------------------------
        // VIEWS
        //---------------------------------------------------------------------------------
        this.optionsView = new OptionsView();
        this.optionsView.bindSoundButtonClick(this.handlerToggleSoundClick.bind(this));
        this.optionsView.bindToggleMayusMinusClick(this.handlerToggleMayusMinusClick.bind(this));
        this.optionsView.bindSelecFontFamilyClick(this.handlerSelectFontFamilyClick.bind(this));
        this.optionsView.bindSelectLevelClick(this.handlerSelectLevelClick.bind(this));
        
        
        this.gamePlayView = new GamePlayView();
        this.gamePlayView.bindButtonClick(this.handleButtonClick.bind(this));
        
    }

    //---------------------------------------------------------------------------------
    restartGame() {
        this.abcQuestions.resetChars();
    }

    //---------------------------------------------------------------------------------
    nextExercise() {
        this.abcAnswers.resetChars();
        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.removeResultMessage();
        
        this.question = this.abcQuestions.extractRandomChar();
        this.abcAnswers.extractCharFromChar(this.question);

        this.answers = this.abcAnswers.getRandomUniqueChars(4);
        this.answers.push(this.question);
        this.answers.sort();
        
        this.gamePlayView.updateQuestionChartContent(this.question);
        this.gamePlayView.addAnswerCharsButtons(this.answers);
    }
    
    //---------------------------------------------------------------------------------
    handleButtonClick(button) {
        if(this.question == button.textContent) {
            this.gamePlayView.veryGoodResultMessage();
            button.classList.add('correct-press-button');
            setTimeout(this.nextExercise.bind(this), 500);
            return;
        }
        this.gamePlayView.disbledCharFailedButton(button);
        this.gamePlayView.tryAgainResultMessage();
    }
    
    //---------------------------------------------------------------------------------
    handlerToggleSoundClick() {
        this.options.toggleSound();
    }

    //---------------------------------------------------------------------------------
    handlerToggleMayusMinusClick() {
        this.options.toggleUpperQuestionLowerAnswer();
    }

    //---------------------------------------------------------------------------------
    handlerSelectFontFamilyClick(font) {
        this.options.selectFont(font);
        let varCSSfont = document.querySelector(':root');
        varCSSfont.style.setProperty('--font-chars', this.options.currentFont);
    }

    //---------------------------------------------------------------------------------
    handlerSelectLevelClick(level) {
        this.options.selectLevel(level);
    }
}