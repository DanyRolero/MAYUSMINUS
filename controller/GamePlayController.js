class GamePlayController {
    constructor() {

        //---------------------------------------------------------------------------------
        // MODELS
        //---------------------------------------------------------------------------------
        this.currentChar = null;
        this.failedChars = [];
        this.currentAnswersChars = [];
        
        this.abcRemainingsChars = new AlphabetModel();
        this.abcAnswersChars = new AlphabetModel();
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
        
        this.restartGame();
        this.nextExercise();
    }

    //---------------------------------------------------------------------------------
    restartGame() {
        this.abcRemainingsChars.fullFillAlphabet();
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
    }

    //---------------------------------------------------------------------------------
    nextExercise() {
        this.currentAnswersChars = [];
        this.currentChar = this.abcRemainingsChars.extractRandomChar();

        this.gamePlayView.updateQuestionChartContent(this.currentChar, this.options.upperQuestionLowerAnswers);
        this.abcAnswersChars.fullFillAlphabet();
        this.abcAnswersChars.extractCharFromChar(this.currentChar);
        this.currentAnswersChars = this.abcAnswersChars.getRandomUniqueChars(this.options.level);
        this.currentAnswersChars.push(this.currentChar);
        this.currentAnswersChars.sort();

        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.addAnswerCharsButtons(this.currentAnswersChars, !this.options.upperQuestionLowerAnswers);
    }
    
    //---------------------------------------------------------------------------------
    handleButtonClick(button) {
        if(this.currentChar == button.textContent) {
            this.gamePlayView.veryGoodResultMessage();
            button.classList.add('correct-press-button');
            setTimeout(() => {
                this.gamePlayView.removeResultMessage();
                this.nextExercise();
            }, 500);
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
        this.gamePlayView.updateQuestionChartContent(this.currentChar, this.options.upperQuestionLowerAnswers);
        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.addAnswerCharsButtons(this.currentAnswersChars, !this.options.upperQuestionLowerAnswers);
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
        this.currentAnswersChars = [];
        this.abcAnswersChars.fullFillAlphabet();
        this.abcAnswersChars.extractCharFromChar(this.currentChar);
        this.currentAnswersChars = this.abcAnswersChars.getRandomUniqueChars(this.options.level);
        this.currentAnswersChars.push(this.currentChar);
        this.currentAnswersChars.sort();
        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.addAnswerCharsButtons(this.currentAnswersChars);
    }
}