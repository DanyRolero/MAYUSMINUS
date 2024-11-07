import { MainViewBaseViewBase } from "./MainViewBase";

export class MainControllerBase {
    #view = null;
    #model = null;

    //---------------------------------------------------------------------------------
    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    //---------------------------------------------------------------------------------
    renderView(viewName) {
        this.#view.showOnlyView(viewName);
    }
}