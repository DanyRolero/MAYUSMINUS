import { ViewComponentBase } from "./ViewComponentBase";
import { TouchButtonViewComponent } from "./TouchButtonViewComponent";

class StartGameView extends ViewComponentBase {
    constructor() {
        super(document.getElementById("start-game-view"));
        this.startGameButton = TouchButtonViewComponent(document.getElementById("start-game-button"));
    }
}