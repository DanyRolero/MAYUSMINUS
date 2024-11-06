import { ViewComponentBase } from './ViewComponentBase.js';

export class CardCharVCTemplateLiteral extends ViewComponentBase {

        //---------------------------------------------------------------------------------
        constructor(svgSpriteData) {
            super(document.createElement('div'));
            this.addClass('card-char-svg-comp');
            this.domElement.addEventListener('touchstart', () => this.touchEventHandler(), {passive: false});

            this.domElement.innerHTML = `
                <div>
                    <svg viewBox="${svgSpriteData.viewBox}">
                        <use href="${svgSpriteData.href}"></use>
                    </svg>
                </div>`; 

            this.touchEventHandler = () => {console.log('touchEventHandler no definido');};
        }

        //---------------------------------------------------------------------------------
        setBackgroundColor(CSScolorValue) {
            this.domElement.style.backgroundColor = CSScolorValue;
        }

        //---------------------------------------------------------------------------------
        setFillColor(CSScolorValue) {
            let svgElement = this.domElement.querySelector('svg');
            svgElement.style.fill = CSScolorValue;
        }

        //---------------------------------------------------------------------------------
        setSvgSpriteData(svgSpriteData) {
            let svgElement = this.domElement.querySelector('svg');
            svgElement.setAttribute('viewBox', svgSpriteData.viewBox);
            
            let useSvgElement = this.domElement.querySelector('use');
            useSvgElement.setAttribute('href', svgSpriteData.href);
        }

        //---------------------------------------------------------------------------------
        bindTouchEventHandler(handler) {
            this.touchEventHandler = handler;
        }
}