class GamePlayController extends BaseController {
    constructor() {
        super();
        
        this.minLevel = 1;
        this.maxLevel = 4;
        this.currentLevel = this.minLevel;

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
        this.speecher = null;
        this.correctSound = null;
        this.incorrectSound = null;
        

        //---------------------------------------------------------------------------------
        // VIEWS
        //---------------------------------------------------------------------------------
        this.startView = new StartView(document.getElementById('start-view'));
        this.startView.bindStartClickButton(this.handlerStartClickButton.bind(this));
        this.addView('start', this.startView);
        
        this.gameView = new BaseView(document.getElementById('game-view'));
        this.addView('game', this.gameView);
        
        this.gamePlayView = new GameView(document.getElementById('gameplay-view'));
        this.gamePlayView.bindButtonClick(this.handlerTouchAnswer.bind(this));
        this.gamePlayView.bindQuestionTouch(this.handlerQuestionTouch.bind(this));

        //---------------------------------------------------------------------------------
        this.restartMenuView = new RestartMenuView(document.getElementById('restart-menu-view'));
        this.restartMenuView.bindRestartClickButton(this.handlerRestartClickButton.bind(this));
        this.restartMenuView.bindReviseClickButton(this.handlerReviseClickButton.bind(this));
        this.addView('complete', this.restartMenuView);
        this.restartGame();

    }

    //---------------------------------------------------------------------------------
    // FLOW STATES
    //---------------------------------------------------------------------------------
    startGame() {
        this.restartGame();
    }

    //---------------------------------------------------------------------------------
    // Reinicia una nueva partida con todas las letras
    restartGame() {
        this.abcRemainingsChars.fullFillAlphabet();
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
        this.nextExercise();
        this.showOnlyView('game');  
    }

    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con las letras falladas
    reviseGame() {
        this.showOnlyView('game');
        this.abcRemainingsChars.setChars(this.failedChars);
        this.failedChars = [];
        this.nextExercise();
    }

    //---------------------------------------------------------------------------------
    // Prepara el siguiente ejercicio
    nextExercise() {
        this.correctAnswerSelected = false;
        this.currentQuestionChar = this.abcRemainingsChars.extractRandomChar();
        //this.speecher.speak(this.currentQuestionChar);

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
        this.speecher = new SpeecherModel();
        this.correctSound = new SoundModel('assets/sounds/fx/correct_1.mp3');
        this.incorrectSound = new SoundModel('assets/sounds/fx/incorrect_1.mp3');
        this.startGame();
    }

    //---------------------------------------------------------------------------------
    handlerTouchAnswer(button) {
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
    handlerQuestionTouch() {
        this.speecher.speak(this.currentQuestionChar);
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
    handlerSelectLevelClick() {
        if(this.currentLevel == this.maxLevel) this.currentLevel = this.minLevel;
        else this.currentLevel++;

        this.options.selectLevel(this.currentLevel);
        this.optionsView.updateTextContentLevelButton('<span>'+this.currentLevel+'</span>');

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