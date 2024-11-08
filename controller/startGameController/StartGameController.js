import { ControllerBase } from "../ControllerBase.js";
import { StartGameTouchButtonController } from "./StartGameTouchButtonController.js";

export class StartGameController extends ControllerBase {
    constructor(model, view) {
        super(model, view);
        this.startGameButtonController = new StartGameTouchButtonController(model, view);
    }
}