import { ControllerBase } from "../ControllerBase.js";

export class StartGameTouchButtonController extends ControllerBase {
    constructor(model, view) {
        super(model, view);
        view.startGame.startGameButton.bindTouchEventHandler(this.startGame.bind(this));
    }

    startGame() {
        this.view.showOnlyView("game-play");
        console.log('ok');
        
    }
}