class OptionsModel {
    #level = 1;
    #maxLevel = 27;
    #minLevel = 1;
    #currentFont;
    #fonts = [];
    #upperQuestionLowerAnswers = true;
    #soundActive = true;

    constructor() {
        this.#fonts['sans'] = 'Arial, Helvetica, sans-serif';
        this.#fonts['serif'] = "font-family: 'Times New Roman', Times, serif";
        this.#fonts['handwrite'] = 'fantasy';
    }
    

    //---------------------------------------------------------------------------------
    // GETTERS
    //---------------------------------------------------------------------------------
    
    //---------------------------------------------------------------------------------
    get level() { return this.#level; }
    get currentFont() { return this.#currentFont; }
    get upperQuestionLowerAnswers() { return this.#upperQuestionLowerAnswers; }


    //---------------------------------------------------------------------------------
    // SETTERS
    //---------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------
    selectLevel(level) {
        if(level < this.#minLevel) level = this.#minLevel;
        if(level > this.#maxLevel) level = this.#maxLevel;
        this.#level = level;
    }

    //---------------------------------------------------------------------------------
    selectFont(font) {
        this.#currentFont = this.#fonts[font];
    }

    //---------------------------------------------------------------------------------
    toggleUpperQuestionLowerAnswer() {
        this.#upperQuestionLowerAnswers = this.#upperQuestionLowerAnswers ? false : true;
    }

    //---------------------------------------------------------------------------------
    toggleSound() {
        this.#soundActive = this.#soundActive ? false : true;
    }
}