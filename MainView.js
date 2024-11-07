import { ViewBase } from "./MainViewBase";
import { AppView } from "./AppView";
import { StartGameView } from "./StartGameView";
import { GamePlayView } from "./GamePlayView";

export class MainView extends ViewBase {
    constructor() {
        super(new AppView());
        this.addView("start-game-view", new StartGameView());
        this.addView("game-play-view", new GamePlayView());
    }
}