import { MainViewBase } from "./base/MainViewBase.js";
import { AppView } from "./view/AppView.js";
import { StartGameView } from "./view/startGameView/StartGameView.js";
import { GamePlayView } from "./view/gamePlayView/GamePlayView.js";

export class MainView extends MainViewBase {
    constructor() {
        super(new AppView());
        this.startGame = new StartGameView();
        this.gamePlay = new GamePlayView();

        this.addView("start-game",  this.startGame);
        this.addView("game-play", this.gamePlay);
    }
}