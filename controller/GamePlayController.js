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
        this.speaker = new SpeakerBaseModel('es-ES');
        //this.audio = new AudioModel();
        //this.audio.load('correct', 'assets/sounds/fx/correct_3.mp3');
        //this.audio.load('incorrect', 'assets/sounds/fx/incorrect_1.mp3');
        //this.audio.load('victory', 'assets/sounds/fx/victory_1.mp3');
        

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
    // Comienza una partida para jugar con todas las letras del abecedario
    startGame() {
        this.abcRemainingsChars.fullFillAlphabet();
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
        this.nextExercise();
        this.showOnlyView('challenge');
    }

    //---------------------------------------------------------------------------------
    // Reinicia una nueva partida con todas las letras
    restartGame() {
        this.startGame();    
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
        this.abcAnswersChars.fullFillAlphabet();
        this.abcAnswersChars.extractCharFromChar(this.currentQuestionChar);
        //this.speaker.speak(this.currentQuestionChar);
        
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
        //this.audio.clone('victory', 200);
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
        window.playAudio();
        this.speaker.speak('Hola');
        /*
        if(this.correctAnswerSelected) return;
        if(this.currentQuestionChar == button.textContent) {
            this.correctAnswerSelected = true;
            this.audio.clone('correct', 200);
            this.gamePlayView.setCorrectAnswerChoiceStyle(button);
            setTimeout(() => {
                if(this.abcRemainingsChars.length == 0) {
                    this.gameCompleteMenu();
                    return;
                }
        
                this.nextExercise();
            }, 500);
        }
        else {
            this.audio.clone('incorrect', 200);
        this.gamePlayView.disabledAnswerChoice(button);
        this.failedChars.push(button.textContent);
    }
    */
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
        this.startGame();
    }

    //---------------------------------------------------------------------------------
    handlerReviseClickButton() {
        this.reviseGame();
    }
}