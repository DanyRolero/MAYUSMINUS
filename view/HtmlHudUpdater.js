class HtmlHudUpdater {
    constructor() {
        this.clickedButton;
        this.currentQuestionCharHTML = document.getElementById('current-char-question');
        this.currentAnswerCharsHTML = document.getElementById('current-chars-answers');
        this.resultMessageHTML = document.getElementById('result-message');
        this.alphabet = new Alphabet();
    }

    //---------------------------------------------------------------------------------
    updateCurrentQuestionContent(content) {
        this.currentQuestionCharHTML.textContent = content;
    }

    //---------------------------------------------------------------------------------
    addAnswerButton(content) {
        let newHTMLbutton = document.createElement('button');
        newHTMLbutton.textContent = content;
        
        newHTMLbutton.addEventListener('click', () => {
            this.clickedButton = newHTMLbutton;
        });
        this.currentAnswerCharsHTML.appendChild(newHTMLbutton);
    }

    //---------------------------------------------------------------------------------
    updateResultMessage(content) {
        this.resultMessageHTML.textContent = content;
    }
}