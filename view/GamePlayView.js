import { ViewBase } from "./ViewBase.js";
import { CardCharView } from "./CardCharView.js";

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
        this.currentChatQuestion.addEventListener("touchstart", () => this.currentCharQuestionTouchEventHandler(), { passive: false });
        this.currentCharQuestionTouchEventHandler = () => { console.log("Touch event handler not set") };

        // ----------------------------------------------------------------
        // Current chars answers choices component
        this.currentCharAnswers = document.getElementById("current-char-answers");
        this.currentCharAnswers.addEventListener("touchstart", () => this.currentCharAnswersTouchEventHandler(), { passive: false });
        this.currentCharAnswersTouchEventHandler = () => { console.log("Touch event handler not set") };
    }

    // ----------------------------------------------------------------
    // UPDATE VIEW METHODS
    // ----------------------------------------------------------------
    updateCurrentCharQuestion(svgData) {
        this.currentCharQuestion.innerHTML = '';
        // Completar con un elemento de vista de tipo CardCharView
    }

    // ----------------------------------------------------------------
    updateCurrentCharAnswers(svgDataList) {      
        this.currentCharAnswers.innerHTML = '';
        svgDataList.forEach(svgData => {
            //completar con un elemento de vista de tipo CardCharView
        });
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