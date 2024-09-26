class AlphabetModel {
    constructor() {
        this.CHARS = [
            'a','b','c','d','e',
            'f','g','h','i','j',
            'k','l','m','n','ñ',
            'o','p','q','r','s',
            't','u','v','w','x',
            'y','z'
        ];
    
        Object.freeze(this.CHARS);

        this.remainingsChars = this.CHARS.slice(0, this.CHARS.length);
        this.failedChars = [];
        this.currentQuestionChar = '?';
        this.currentAnswerChars = [];
    }

    //---------------------------------------------------------------------------------
    resetRemainingsCharsList() {
        this.remainingsChars = this.CHARS.slice(0, this.CHARS.length);
    }

    //---------------------------------------------------------------------------------
    resetFailedChars() {
        this.failedChars = [];
    }

    //---------------------------------------------------------------------------------
    resetAnswerChars() {
        this.currentAnswerChars = [];
    }

    //---------------------------------------------------------------------------------
    extractRandomRemainingChar() {
        if(this.remainingsChars.length == 0) this.resetRemainingsCharsList();
    
        let randomIndex = Math.floor(Math.random() * this.remainingsChars.length);
        this.currentQuestionChar = this.remainingsChars.splice(randomIndex, 1)[0];
        this.currentAnswerChars.push(this.currentQuestionChar);
    }
    
    //---------------------------------------------------------------------------------
    addNotRepeatedRandomAnswerChar() {
        if(this.currentAnswerChars.length >= this.CHARS.length) throw new Error("No more characters in the alphabet");
        let randomAnswerChar;
        do {
            randomAnswerChar = this.CHARS[Math.floor(Math.random() * this.CHARS.length)];
        } while (this.currentAnswerChars.includes(randomAnswerChar));
    
        this.currentAnswerChars.push(randomAnswerChar);
        this.currentAnswerChars = this.currentAnswerChars.sort();
    }

    //---------------------------------------------------------------------------------
    addNotRepeatedRandomAnswersChars(count) {
        for(let i = 0; i < count; i++) this.addNotRepeatedRandomAnswerChar();
    }

    //---------------------------------------------------------------------------------
    removeAnswerChar() {
        for(let i = 0; i < this.currentAnswerChars.length; i++) {
            if(this.currentAnswerChars[i] != this.currentQuestionChar) {
                this.currentAnswerChars.splice(i, 1);
                return;
            }
        }
    }

    //---------------------------------------------------------------------------------
    reset() {
        this.resetRemainingsCharsList();
        this.resetFailedChars();
        this.resetAnswerChars();
    }

    //---------------------------------------------------------------------------------
    /* 
        - chars -> datos
        - getRandomChar
        - getRandomUnrepeatedChars(count);
        - extractRandomChar
    
    */
}