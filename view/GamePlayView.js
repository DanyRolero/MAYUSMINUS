import { ViewBase } from "./ViewBase.js";

export class GamePlayView extends ViewBase {
    constructor() {
        //View Component
        super(document.getElementById("game-play-view"));

        // ----------------------------------------------------------------
        // Switch Sound Button component
        this.switchSoundButton = document.getElementById("switch-sound-button");
        this.switchSoundButton.addEventListener("touchstart", () => this.switchSoundTouchEventHandler(), { passive: false });
        this.switchSoundTouchEventHandler = () => { console.log("Touch event handler not set") };

        // ----------------------------------------------------------------
        // Toggle Hand User Button component
        this.toggleHandUserButton = document.getElementById("toggle-hand-user-button");
        this.toggleHandUserButton.addEventListener("touchstart", () => this.toggleHandUserTouchEventHandler(), { passive: false });
        this.toggleHandUserTouchEventHandler = () => { console.log("Touch event handler not set") };

        // ----------------------------------------------------------------
        // Open Options Menu Button component
        this.openOptionsMenuButton = document.getElementById("open-options-menu-button");
        this.openOptionsMenuButton.addEventListener("touchstart", () => this.openOptionsMenuTouchEventHandler(), { passive: false });
        this.openOptionsMenuTouchEventHandler = () => { console.log("Touch event handler not set") };

        // ----------------------------------------------------------------
        // Game play area component
        this.gamePlayArea = document.getElementById("game-play-area");

        // ----------------------------------------------------------------
        // Current char question component
        this.currentCharQuestion = document.getElementById("current-char-question");
        this.currentCharQuestion.addEventListener("touchstart", () => this.currentCharQuestionTouchEventHandler(), { passive: false });
        this.currentCharQuestionTouchEventHandler = () => { console.log("Touch event handler not set") };

        // ----------------------------------------------------------------
        // Current chars answers choices component
        this.currentCharAnswers = document.getElementById("current-chars-answers");
        this.currentCharAnswers.addEventListener("touchstart", () => this.currentCharAnswersTouchEventHandler(), { passive: false });
        this.currentCharAnswersTouchEventHandler = () => { console.log("Touch event handler not set") };
    }

    // ----------------------------------------------------------------
    // UPDATE VIEW METHODS
    // ----------------------------------------------------------------
    updateCurrentCharQuestion(svgData) {
        this.currentCharQuestion.appendChild(this._createCardCharView(svgData));
    }

    // ----------------------------------------------------------------
    updateCurrentCharAnswers(svgDataList) {      
        this.currentCharAnswers.innerHTML = '';
        svgDataList.forEach(svgData => {
            this.currentCharAnswers.appendChild(this._createCardCharView(svgData));
        });
    }

    // ----------------------------------------------------------------
    _createCardCharView(svgData) {
        let cardCharElement = document.createElement('div');
        cardCharElement.classList.add('card-char-svg-comp');
        cardCharElement.innerHTML = `
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="${svgData.viewBox}">
                    <use href="${svgData.href}"></use>
                </svg>
            </div>
            <data value="${svgData.value}"></data>
        `;
        return cardCharElement;
    }

    // ----------------------------------------------------------------
    // BIND HANDLERS METHODS
    // ----------------------------------------------------------------
    bindSwitchSoundTouchEventHandler(handler) {
        this.switchSoundTouchEventHandler = handler;
    }

    // ----------------------------------------------------------------
    bindToggleHandUserTouchEventHandler(handler) {
        this.toggleHandUserTouchEventHandler = handler;
    }

    // ----------------------------------------------------------------
    bindOpenOptionsMenuTouchEventHandler(handler) {
        this.openOptionsMenuTouchEventHandler = handler;
    }
}