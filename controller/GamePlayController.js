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

        this.restartMenuView = new RestartMenuView();
        
        this.restartGame();
    }

    //---------------------------------------------------------------------------------
    // FLOW STATES
    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con todas las letras del abecedario
    restartGame() {
        this.abcRemainingsChars.fullFillAlphabet();
        this.abcAnswersChars.fullFillAlphabet();
        this.failedChars = [];
        this.gameStateManager()
    }

    //---------------------------------------------------------------------------------
    // Comienza una partida para jugar con las letras falladas
    reviseGame() {

    }

    //---------------------------------------------------------------------------------
    // Prepara el siguiente ejercicio
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
    // Muestra un mensaje y un menu para reiniciar o repasar en el siguiente juego
    gameCompleteMenu() {
        this.gamePlayView.hideAnswersButtons();
        this.restartMenuView.showView();
        if(this.failedChars.length > 0) this.restartMenuView.showReviseButton();
    }

    //---------------------------------------------------------------------------------
    // Controla que estado de juego debe ejecutarse
    gameStateManager() {
        if(this.abcRemainingsChars.length == 0) {
            this.gameCompleteMenu();
            return;
        }

        this.nextExercise();
    }


            // Esconder Cartas de respuesta.
            // Mostrar Menú restart

            //Mostrar mensaje: Muy bien, has completado todas las letras!
            //Añadir mensaje: pulsa en reiniciar para jugar con todas las letras

            //Si hay fallos -> 
            //Añadir mensaje: pulsa en repasar para volver a jugar con las letras difíciles
                //mostrar botón Repasar


    //---------------------------------------------------------------------------------
    // INTERACTIVITY
    //---------------------------------------------------------------------------------
    handleButtonClick(button) {
        if(this.currentChar.toLowerCase() == button.textContent.toLowerCase()) {
            button.classList.add('correct-press-button');
            setTimeout(() => {
                this.gameStateManager();
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