import { MainControllerBase } from "./base/MainControllerBase.js";
import { StartGameController } from "./controller/startGameController/StartGameController.js"; 

export class MainController extends MainControllerBase {
    constructor(model, view) {
        super(model, view);
        this.startGameController = new StartGameController(model, view);
    }
}