import { TouchButtonView } from "../TouchButtonView.js";

export class StartGameButtonView extends TouchButtonView {
    constructor() {
        super(document.getElementById("start-game-button"));
    }
}