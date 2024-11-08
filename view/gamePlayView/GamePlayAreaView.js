import { ViewBase } from "../ViewBase.js";

export class GamePlayAreaView extends ViewBase {
    constructor() {
        super(document.getElementById("game-play-area"));
    }

    //---------------------------------------------------------------------------------
    // Cambiar la posición de la carta en la mano del usuario para adaptarse a
    // usuarios zurdos y diestros
}