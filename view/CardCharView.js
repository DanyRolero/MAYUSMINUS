import { ViewBase } from "./ViewBase.js";

export class CardCharView extends ViewBase {
    constructor(svgData) {
        super(document.createElement('div'));
        this.domElement.classList.add('card-char-svg-comp');
        this.svgData = svgData;
        this.updateView(svgData);
    }

    updateView(svgData) {
        this.domElement.innerHTML = `
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="${svgData.viewBox}">
                <use href="${svgData.href + '#' + svgData.char}"></use>
            </svg>
        </div>
        `;
    }
}