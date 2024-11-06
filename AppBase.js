// Extender para cada app o juego
// Añadir en el constructor todos los controladores que tendrá la app.

class AppBase {
    #model = null;
    #view = null;
    #controller = null;


    //---------------------------------------------------------------------------------
    constructor(model, view, controller) {
        this.#model = model;
        this.#view = view;
        this.#controller = controller;
    }

    //---------------------------------------------------------------------------------
    get model() {return this.#model;}
    get view() {return this.#view;}
    get controller() {return this.#controller;}

    //---------------------------------------------------------------------------------
    



}