class GamePlayController {
    constructor() {
        this.question;
        this.answers = [];
        this.app = document.getElementById('app');
        this.abcQuestions = new AlphabetModel2();
        this.abcAnswers = new AlphabetModel2();
        this.gamePlayView = new GamePlayView();
        this.gamePlayView.bindButtonClick(this.handleButtonClick.bind(this));
        this.gamePlayView.addView(this.app);
        this.restartGame();
        this.nextExercise();
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
        this.gamePlayView.updateQuestionChartContent(this.question);
        
        console.log(this.abcAnswers.extractCharFromChar(this.question));
        this.answers = this.abcAnswers.getRandomUniqueChars(4);
        console.log(this.answers);
        this.answers.push(this.question);
        this.answers.sort();

        this.gamePlayView.addAnswerCharsButtons(this.answers);
    }
    
    //---------------------------------------------------------------------------------
    handleButtonClick(button) {
        if(this.question == button.textContent) {
            this.nextExercise();
            return;
        }
        this.gamePlayView.disbledCharFailedButton(button);
        this.gamePlayView.tryAgainResultMessage();
    }
    
}