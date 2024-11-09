import { ViewBase } from "./ViewBase.js";


export class StartGameView extends ViewBase {
    constructor() {
        super(document.getElementById("start-game-view"));

        this.startGameButton = document.getElementById("start-game-button");
        this.startGameButton.addEventListener("touchstart", () => this.startGameTouchEventHandler(), {passive: false});
        this.startGameTouchEventHandler = () => { console.log("Touch event handler not set")};
    }

    // ----------------------------------------------------------------
    bindStartGameTouchEventHandler(handler) {
        this.startGameTouchEventHandler = handler;
    }
}