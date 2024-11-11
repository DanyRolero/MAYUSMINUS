export class GameOptions {
    #isSoundActive = true;
    #handUser = 'right';
    #currentFontFamily = 'Dekko';
    #fontFamilyList = ['Dekko'];
    #currentAnswerChoices = 2;
    #questionTextTransform = 'uppercase';
    #answerTextTransform = 'lowercase';

    // ----------------------------------------------------------------
    constructor() {
        if (localStorage.getItem('handUser')) {
            this.#handUser = localStorage.getItem('handUser');
        } else {
            localStorage.setItem('handUser', this.#handUser);
        }
    }

    get isSoundActive() { return this.#isSoundActive; }
    get handUser() { return this.#handUser; }
    get currentFontFamily() { return this.#currentFontFamily; }
    get currentAnswerChoices() { return this.#currentAnswerChoices; }
    get questionTextTransform() { return this.#questionTextTransform; }
    get answerTextTransform() { return this.#answerTextTransform; }
    
    // ----------------------------------------------------------------
    switchSoundActive() {
        this.#isSoundActive = !this.#isSoundActive;
    }

    // ----------------------------------------------------------------
    togglehHandUser() {
        this.#handUser = this.#handUser === 'right' ? 'left' : 'right';
        localStorage.setItem('handUser', this.#handUser);
    }

    // ----------------------------------------------------------------
    nextFontFamily() {
        const index = this.#fontFamilyList.indexOf(this.#currentFontFamily);
        this.#currentFontFamily = this.#fontFamilyList[(index + 1) % this.#fontFamilyList.length];
    }

    // ----------------------------------------------------------------
    setAmountAnswerChoices(amount) {
        const minAmount = 2;
        const maxAmount = 6;
        if (amount < minAmount) amount = minAmount;
        if (amount > maxAmount) amount = maxAmount;
        this.#currentAnswerChoices = amount;
    }

    // ----------------------------------------------------------------
    switchQuestionTextTransform() {
        this.#questionTextTransform = this.#questionTextTransform === 'uppercase' ? 'lowercase' : 'uppercase';
    }
    
    // ----------------------------------------------------------------
    switchAnswerTextTransform() {
        this.#answerTextTransform = this.#answerTextTransform === 'uppercase' ? 'lowercase' : 'uppercase';
    }
}