import { ControllerBase } from "../ControllerBase.js";

export class StartGameController extends ControllerBase {
    constructor(model, view) {
        super(model, view);
        this.view.startGame.bindStartGameTouchEventHandler(this.startGame.bind(this));
    }

    // ----------------------------------------------------------------
    startGame() { 
        this.view.showOnlyView('game-play');
    }
}