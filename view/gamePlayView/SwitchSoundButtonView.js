import { TouchButtonView } from "../TouchButtonView.js";

export class SwitchSoundButtonView extends TouchButtonView {
    constructor() {
        super(document.getElementById("switch-sound-button"));
    }
}

    /*
        - Este bóntón activa o desactiva el sonido del juego.
        - Para ello cambia true o false la opción del modelo correspondiente.
        - El aspecto del icono del botón cambia según el estado del sonido.
    */