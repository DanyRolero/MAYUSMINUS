import { GameState } from '../lib/GameState.js';
import { SpanishLowerCaseAlphabet } from '../lib/SpanishLowerCaseAlphabet.js';
import { CardCharsSVGPartData } from '../lib/CardCharsSVGPartData.js';
import { GameOptions } from '../lib/GameOptions.js';

export class MainModel {
    #gameState = new GameState();
    #remainingQuestionChars = new SpanishLowerCaseAlphabet();
    #answerChoicesChars = new SpanishLowerCaseAlphabet();
    #cardsCharsSvgPartData = new CardCharsSVGPartData();
    #gameOptions = new GameOptions();;
    
    //---------------------------------------------------------------------------------
    constructor() {
        this.#gameState = new GameState();
        this.#remainingQuestionChars = new SpanishLowerCaseAlphabet();
        this.#answerChoicesChars = new SpanishLowerCaseAlphabet();
        this.#cardsCharsSvgPartData = new CardCharsSVGPartData();
        this.#gameOptions = new GameOptions();
    }

        // ----------------------------------------------------------------
        get gameState() { return this.#gameState; }
        get remainingQuestionChars() { return this.#remainingQuestionChars; }
        get answerChoicesChars() { return this.#answerChoicesChars; }
        get svgPartData() { return this.#cardsCharsSvgPartData; }
        get gameOptions() { return this.#gameOptions; }
}