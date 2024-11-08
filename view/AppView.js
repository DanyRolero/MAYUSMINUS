import { ViewBase } from "./ViewBase.js";

export class AppView extends ViewBase {
    constructor() {
        super(document.getElementById("app-view"));
    }
}