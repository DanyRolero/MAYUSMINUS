class GamePlayController {
    constructor() {
        this.app = document.getElementById('app');
        this.alphabetModel = new AlphabetModel();
        this.gamePlayView = new GamePlayView();
        this.gamePlayView.bindButtonClick(this.handleButtonClick.bind(this));
        this.gamePlayView.addView(this.app);
        this.restartGame();
        this.nextCharExercise();
    }

    //---------------------------------------------------------------------------------
    restartGame() {
        this.alphabetModel.reset();
    }

    //---------------------------------------------------------------------------------
    nextCharExercise() {
        this.alphabetModel.resetAnswerChars();
        this.gamePlayView.removeCharsButtons();
        this.gamePlayView.removeResultMessage();
        this.alphabetModel.randomQuestionCharFromRemainings();
        this.alphabetModel.addNotRepeatedRandomAnswersChars(4); 
        this.gamePlayView.updateQuestionChartContent(this.alphabetModel.currentQuestionChar);
        this.gamePlayView.addAnswerCharsButtons(this.alphabetModel.currentAnswerChars);
    }
    
    //---------------------------------------------------------------------------------
    handleButtonClick(button) {
        if(this.alphabetModel.currentQuestionChar == button.textContent) {
            this.nextCharExercise();
            return;
        }
        this.gamePlayView.disbledCharFailedButton(button);
        this.gamePlayView.tryAgainResultMessage();
    }
    
}