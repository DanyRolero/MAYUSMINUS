class GamePlayController {
    constructor() {

        this.currentQuestionChar = null;
        this.currentAnswersChars = [];
        this.failedChars = [];
        
        //---------------------------------------------------------------------------------
        // MODELS
        //---------------------------------------------------------------------------------
        this.abcRemainingsChars = new AlphabetModel();
        this.abcAnswersChars = new AlphabetModel();
        this.options = new OptionsModel();

        //---------------------------------------------------------------------------------
        // VIEWS
        //---------------------------------------------------------------------------------
        this.exerciseView = new AbstractView(document.getElementById('exercise-view'));

        this.optionsView = new OptionsView(document.getElementById('options-view'));
        this.optionsView.bindSoundButtonClick(this.handlerToggleSoundClick.bind(this));
        this.optionsView.bindToggleMayusMinusClick(this.handlerToggleMayusMinusClick.bind(this));
        this.optionsView.bindSelecFontFamilyClick(this.handlerSelectFontFamilyClick.bind(this));
        this.optionsView.bindSelectLevelClick(this.handlerSelectLevelClick.bind(this));
        
        this.gamePlayView = new GamePlayView(document.getElementById('gameplay-view'));
        this.gamePlayView.bindButtonClick(this.handlerButtonClick.bind(this));

        //---------------------------------------------------------------------------------
        this.restartMenuView = new RestartMenuView(document.getElementById('gameplay-view'));
        this.restartMenuView.bindRestartClickButton(this.handlerRestartClickButton.bind(this));
        this.restartMenuView.bindReviseClickButton(this.handlerReviseClickButton.bind(this));
        
        this.startGame();
    }

    //---------------------------------------------------------------------------------
    // FLOW STATES
    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con todas las letras del abecedario
    startGame() {
        this.abcRemainingsChars.fullFillAlphabet();
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
        this.nextExercise();
    }

    //---------------------------------------------------------------------------------
    // 
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
        
        this.gamePlayView.updateQuestionStatement(this.currentQuestionChar);
        
        this.gamePlayView.removeAnswerChoices();
        this.gamePlayView.addAnswerChoiceGroup(this.currentAnswersChars);
    }

    //---------------------------------------------------------------------------------
    // Muestra un mensaje y un menu para reiniciar o repasar en el siguiente juego
    gameCompleteMenu() {
        this.optionsView.hideView();
        this.gamePlayView.hideView();
        this.restartMenuView.showView();
        if(this.failedChars.length > 0) this.restartMenuView.showReviseButton();
    }


    //---------------------------------------------------------------------------------
    // INTERACTIVITY
    //---------------------------------------------------------------------------------
    handlerButtonClick(button) {
        if(this.currentQuestionChar == button.textContent) {
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
        this.gamePlayView.disabledAnswerChoice(button);
        this.failedChars.push(button.textContent);
    }
    
    //---------------------------------------------------------------------------------
    handlerToggleSoundClick() {
        this.options.toggleSound();
    }

    //---------------------------------------------------------------------------------
    handlerToggleMayusMinusClick() {
        let varCSSfont = document.querySelector(':root');
        varCSSfont.style.setProperty('--font-chars', this.options.currentFont);
        varCSSfont.style.setProperty('--font-chars', this.options.currentFont);
        varCSSfont.style.setProperty('--font-chars', this.options.currentFont);
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