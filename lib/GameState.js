export class GameState {
    #currretCharQuestion = '';
    #currentCharsAnswers = [];
    #failedChars = [];
    #lockAnswersChoices = false;

    // ----------------------------------------------------------------
    get currentQuestion() { return this.#currretCharQuestion; }
    get currentAnswers() { return this.#currentCharsAnswers; }
    get faledAnswers() { return this.#failedChars; }
    get lockAnswersChoices() { return this.#lockAnswersChoices; }

    // ----------------------------------------------------------------
    setQuestion(char) {
        this.#currretCharQuestion = char;
    }

    // ----------------------------------------------------------------
    setAnswers(charsArray) {
        this.#currentCharsAnswers = charsArray;
    }

    // ----------------------------------------------------------------
    addFailedAnswers(char) {
        this.#failedChars.push(char);
    }

    // ----------------------------------------------------------------
    cleanFailedChars() { this.#failedChars = []; }

    // ----------------------------------------------------------------
    lockAnswers() { this.#lockAnswersChoices = true; }
    unlockAnswers() { this.#lockAnswersChoices = false; }
}

