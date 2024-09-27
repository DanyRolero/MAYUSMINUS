class GamePlayController {
    constructor() {
        this.question;
        this.answers = [];
        this.fails = [];
/*
        this.app = document.getElementById('app');
        this.abcQuestions = new AlphabetModel2();
        this.abcAnswers = new AlphabetModel2();
        this.gamePlayView = new GamePlayView();
        this.gamePlayView.bindButtonClick(this.handleButtonClick.bind(this));
        this.gamePlayView.addView(this.app);
        this.restartGame();
        this.nextExercise();
        this.gamePlayView.tryAgainResultMessage();
        */
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
    
}