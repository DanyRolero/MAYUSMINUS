import { TouchButtonView } from "../TouchButtonView.js";

export class OpenOptionsMenuButtonView extends TouchButtonView {
    constructor() {
        super(document.getElementById("open-options-menu-button"));
    }
}

/*
    - Este bóton cambia la vista de la pantalla de juego a la pantalla de opciones.
    - Para ello llama a showOnlyView("options-menu-view") de la clase ViewBase.
*/