export class ControllerComponentBase {
    #model = null;
    #view = null;
    #viewComponent = null;

    //---------------------------------------------------------------------------------
    constructor(model, mainView, viewComponent) {
        this.#model = model;
        this.#view = mainView
        this.#viewComponent = viewComponent;
    }
}