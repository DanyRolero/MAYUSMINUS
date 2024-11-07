import { ViewComponentBase } from "./ViewComponentBase";

export class TouchButtonViewComponent extends ViewComponentBase {  
    constructor(domElement) {
       super(domElement);
       this.touchEventHandler = () => {};
       this.domElement.addEventListener("touchstart", () => this.touchEventHandler(), {passive: false});
    }

    //---------------------------------------------------------------------------------
    bindTouchEventHandler(handler) {
        this.touchEventHandler = handler;
    }
}