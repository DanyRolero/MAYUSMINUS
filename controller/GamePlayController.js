class GamePlayController extends BaseController {
    constructor() {
        super();
        this.correctAnswerSelected = false;
        
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
        // ASYNC PRELOADS
        //---------------------------------------------------------------------------------
        this.correctSound = null;
        this.incorrectSound = null;
        

        //---------------------------------------------------------------------------------
        // VIEWS
        //---------------------------------------------------------------------------------
        this.startView = new StartView(document.getElementById('start-view'));
        this.startView.bindStartClickButton(this.handlerStartClickButton.bind(this));
        this.addView('start', this.startView);
        
        this.challengeView = new BaseView(document.getElementById('exercise-view'));
        this.addView('challenge', this.challengeView);

        this.optionsView = new OptionsView(document.getElementById('options-view'));
        this.optionsView.bindSoundButtonClick(this.handlerToggleSoundClick.bind(this));
        this.optionsView.bindToggleMayusMinusClick(this.handlerToggleMayusMinusClick.bind(this));
        this.optionsView.bindSelecFontFamilyClick(this.handlerSelectFontFamilyClick.bind(this));
        this.optionsView.bindSelectLevelClick(this.handlerSelectLevelClick.bind(this));
        
        this.gamePlayView = new GamePlayView(document.getElementById('gameplay-view'));
        this.gamePlayView.bindButtonClick(this.handlerButtonClick.bind(this));

        //---------------------------------------------------------------------------------
        this.restartMenuView = new RestartMenuView(document.getElementById('restart-menu-view'));
        this.restartMenuView.bindRestartClickButton(this.handlerRestartClickButton.bind(this));
        this.restartMenuView.bindReviseClickButton(this.handlerReviseClickButton.bind(this));
        this.addView('complete', this.restartMenuView);
    }

    //---------------------------------------------------------------------------------
    // FLOW STATES
    //---------------------------------------------------------------------------------
    startGame() {
        //this.correctSound = new SoundModel('assets/sounds/fx/correct_1.mp3');
        //this.incorrectSound = new SoundModel('assets/sounds/fx/incorrect_1.mp3');
        this.restartGame();
    }

    //---------------------------------------------------------------------------------
    // Reinicia una nueva partida con todas las letras
    restartGame() {
        this.abcRemainingsChars.fullFillAlphabet();
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
        this.nextExercise();
        this.showOnlyView('challenge');  
    }

    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con las letras falladas
    reviseGame() {
        this.showOnlyView('challenge');
        this.abcRemainingsChars.setChars(this.failedChars);
        this.failedChars = [];
        this.nextExercise();
    }

    //---------------------------------------------------------------------------------
    // Prepara el siguiente ejercicio
    nextExercise() {
        this.correctAnswerSelected = false;
        this.currentQuestionChar = this.abcRemainingsChars.extractRandomChar();
        speecher.speak(this.currentQuestionChar);
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
        this.showOnlyView('complete');
        if(this.failedChars.length > 0) this.restartMenuView.showReviseButton();
    }


    //---------------------------------------------------------------------------------
    // INTERACTIVITY
    //---------------------------------------------------------------------------------
    handlerStartClickButton() {
        this.startGame();
    }


    //---------------------------------------------------------------------------------
    handlerButtonClick(button) {
        if (this.correctAnswerSelected) return;
        if (this.currentQuestionChar == button.textContent) {
            this.correctAnswerSelected = true;
            //this.correctSound.play();
            this.gamePlayView.setCorrectAnswerChoiceStyle(button);
            setTimeout(() => {
                if (this.abcRemainingsChars.length == 0) {
                    this.gameCompleteMenu();
                    return;
                }
                this.nextExercise();
            }, 500);
        }
        else {
            if(button.disabled) return;
            //this.incorrectSound.play();
            this.gamePlayView.disabledAnswerChoice(button);
            if(this.failedChars.indexOf(this.currentQuestionChar) == -1) {
                this.failedChars.push(this.currentQuestionChar);
            }
        }

    }
    
    //---------------------------------------------------------------------------------
    handlerToggleSoundClick() {
        this.options.toggleSound();
    }

    //---------------------------------------------------------------------------------
    handlerToggleMayusMinusClick() {
        this.options.toggleUpperQuestionLowerAnswer();

        if(this.options.upperQuestionLowerAnswers) {
            this.gamePlayView.setQuestionStatementTextTransform('uppercase');
            this.gamePlayView.setAnswerChoiceTextTransform('lowercase');
            return;
        }

        this.gamePlayView.setQuestionStatementTextTransform('lowercase');
        this.gamePlayView.setAnswerChoiceTextTransform('uppercase');
    }

    //---------------------------------------------------------------------------------
    handlerSelectFontFamilyClick(font) {
        this.options.selectFont(font);
        this.gamePlayView.setChallengeFont(this.options.currentFont);
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

        this.gamePlayView.removeAnswerChoices();
        this.gamePlayView.addAnswerChoiceGroup(this.currentAnswersChars);
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