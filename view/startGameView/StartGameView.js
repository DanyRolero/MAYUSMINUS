import { ViewBase } from "../ViewBase.js";
import { TouchButtonView } from "../TouchButtonView.js";

export class StartGameView extends ViewBase {
    constructor() {
        super(document.getElementById("start-game-view"));
        this.startGameButton = new TouchButtonView(document.getElementById("start-game-button"));
    }
}