import { ViewBase } from "../ViewBase.js";
import { SwitchSoundButtonView } from "./SwitchSoundButtonView.js";
import { ToggleHandUserButtonView } from "./ToggleHandUserButtonView.js";
import { OpenOptionsMenuButtonView } from "./OpenOptionsMenuButtonView.js";
import { GamePlayAreaView } from "./GamePlayAreaView.js";

export class GamePlayView extends ViewBase {
    constructor() {
        super(document.getElementById("game-play-view"));
        this.switchSoundButton = new SwitchSoundButtonView();
        this.toggleHandUserButton = new ToggleHandUserButtonView();
        this.openOptionsMenuButton = new OpenOptionsMenuButtonView();

        this.gamePlayArea = new GamePlayAreaView();
        
    }
}