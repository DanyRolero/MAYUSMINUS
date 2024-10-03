class GamePlayController {
    constructor() {

        //---------------------------------------------------------------------------------
        // MODELS
        //---------------------------------------------------------------------------------
        this.currentQuestionChar = null;
        this.currentAnswersChars = [];
        this.failedChars = [];
        
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
        this.gamePlayView.bindButtonClick(this.handlerButtonClick.bind(this));

        this.restartMenuView = new RestartMenuView();
        this.restartMenuView.bindRestartClickButton(this.handlerRestartClickButton.bind(this));
        this.restartMenuView.bindReviseClickButton(this.handlerReviseClickButton.bind(this));
        
        this.startGame();
        this.gameCompleteMenu();
        this.restartMenuView.showReviseButton();
    }

    //---------------------------------------------------------------------------------
    // FLOW STATES
    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con todas las letras del abecedario
    startGame() {
        //this.abcRemainingsChars.fullFillAlphabet();
        this.abcRemainingsChars.addChar('a');
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
        this.nextExercise();
    }

    //---------------------------------------------------------------------------------
    restartGame() {
        this.restartMenuView.hideReviseButton();
        this.restartMenuView.hideView();
        this.gamePlayView.showView();
        this.startGame();    
    }

    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con las letras falladas
    reviseGame() {
        this.restartMenuView.hideReviseButton();
        this.restartMenuView.hideView();
        this.gamePlayView.showView();
        this.abcRemainingsChars.setChars(this.failedChars);
        this.failedChars = [];
        this.nextExercise();
    }

    //---------------------------------------------------------------------------------
    // Prepara el siguiente ejercicio
    nextExercise() {
        this.currentQuestionChar = this.abcRemainingsChars.extractRandomChar();
        this.abcAnswersChars.fullFillAlphabet();
        this.abcAnswersChars.extractCharFromChar(this.currentQuestionChar);
        
        this.currentAnswersChars = [];
        this.currentAnswersChars = this.abcAnswersChars.getRandomUniqueChars(this.options.level);
        this.currentAnswersChars.push(this.currentQuestionChar);
        this.currentAnswersChars.sort();
        
        this.gamePlayView.updateQuestionChartContent(this.currentQuestionChar, this.options.upperQuestionLowerAnswers);
        
        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.addAnswerCharsButtons(this.currentAnswersChars, !this.options.upperQuestionLowerAnswers);
    }

    //---------------------------------------------------------------------------------
    // Muestra un mensaje y un menu para reiniciar o repasar en el siguiente juego
    gameCompleteMenu() {
        this.gamePlayView.hideView();
        this.restartMenuView.showView();
        if(this.failedChars.length > 0) this.restartMenuView.showReviseButton();
    }


    //---------------------------------------------------------------------------------
    // INTERACTIVITY
    //---------------------------------------------------------------------------------
    handlerButtonClick(button) {
        if(this.currentQuestionChar.toLowerCase() == button.textContent.toLowerCase()) {
            button.classList.add('correct-press-button');
            setTimeout(() => {
                if(this.abcRemainingsChars.length == 0) {
                    this.gameCompleteMenu();
                    return;
                }
        
                this.nextExercise();
            }, 500);
            return;
        }
        this.gamePlayView.disbledCharFailedButton(button);
        this.failedChars.push(button.textContent.toLowerCase());
    }
    
    //---------------------------------------------------------------------------------
    handlerToggleSoundClick() {
        this.options.toggleSound();
    }

    //---------------------------------------------------------------------------------
    handlerToggleMayusMinusClick() {
        this.options.toggleUpperQuestionLowerAnswer();
        this.gamePlayView.updateQuestionChartContent(this.currentQuestionChar, this.options.upperQuestionLowerAnswers);
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
        this.abcAnswersChars.extractCharFromChar(this.currentQuestionChar);
        this.currentAnswersChars = this.abcAnswersChars.getRandomUniqueChars(this.options.level);
        this.currentAnswersChars.push(this.currentQuestionChar);
        this.currentAnswersChars.sort();
        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.addAnswerCharsButtons(this.currentAnswersChars);
    }

    //---------------------------------------------------------------------------------
    handlerRestartClickButton() {
        this.restartGame();
    }

    //---------------------------------------------------------------------------------
    handlerReviseClickButton() {
        this.reviseGame();
    }
}