import { AppBase } from "./base/AppBase.js";
import { MainModel } from "./MainModel.js";
import { MainView } from "./MainView.js";
import { MainController } from "./MainController.js";

export class App extends AppBase {
    constructor() {
        let model = new MainModel();
        let view = new MainView();
        let controller = new MainController(model, view);
        super(model, view, controller);
    }
}