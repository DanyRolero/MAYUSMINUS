import { TouchButtonView } from "../TouchButtonView.js";

export class ToggleHandUserButtonView extends TouchButtonView {
    constructor() {
        super(document.getElementById("toggle-hand-user-button"));
    }

    /*
        - boton que cambia la posición de la mano del usuario para adaptarse a usuarios zurdos y diestros.

        - Este botón solo debe mostrarse cuando el dispositivo esta en oriención horizontal
        y por tanto las cartas quedán a la izquierda o derecha de la pantalla.
    */
}