import { ViewBase } from "./ViewBase.js";

export class TouchButtonView extends ViewBase {
    constructor(domElement) {
        super(domElement);
        this.touchEventHandler = () => { console.log("Touch event handler not set")};
        this.domElement.addEventListener("touchstart", () => this.touchEventHandler(), {passive: false});
     }
 
     //---------------------------------------------------------------------------------
     bindTouchEventHandler(handler) {
         this.touchEventHandler = handler;
     }
}