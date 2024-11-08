import { ViewBase } from "../ViewBase.js";
import { StartGameButtonView } from "./StartGameButtonView.js";

export class StartGameView extends ViewBase {
    constructor() {
        super(document.getElementById("start-game-view"));
        this.startGameButton = new StartGameButtonView();
    }
}