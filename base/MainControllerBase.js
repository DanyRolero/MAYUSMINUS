export class MainControllerBase {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    //---------------------------------------------------------------------------------
    get model() {
        return this.#model;
    }

    //---------------------------------------------------------------------------------
    get view() {
        return this.#view;
    }
}