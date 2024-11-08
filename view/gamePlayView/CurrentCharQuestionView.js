import { ViewBase } from "../ViewBase.js";

export class CurrentCharQuestionView extends ViewBase {
    constructor() {
        super(document.getElementById("current-char-question"));
    }
}

/*
    - Esta clase se encarga de mostrar la pregunta actual en la pantalla de juego.
    - Para ello añade un elemento cardChard con un color de marco diferente al de las cartas de respuesta.

*/