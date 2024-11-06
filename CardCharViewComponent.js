class CardCharViewComponent extends ViewComponentBase {

        //---------------------------------------------------------------------------------
        constructor(svgSpriteData) {
            super(document.createElement('div'));
            this.addClass('card-char-svg-comp');

            this.cardSVvgContainer = document.createElement('div');

            const svgNS = "http://www.w3.org/2000/svg";
            this.svgElement = document.createElementNS(svgNS, 'svg');
            this.svgElement.setAttribute('viewBox', svgSpriteData.viewBox);

            this.useSvgElement = document.createElementNS(svgNS, 'use');
            this.useSvgElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', svgSpriteData.href);

            this.domElement.appendChild(this.cardSVvgContainer);
            this.cardSVvgContainer.appendChild(this.svgElement);
            this.svgElement.appendChild(this.useSvgElement);    
        }

        //---------------------------------------------------------------------------------
        setBackgroundColor(CSScolorValue) {
            this.domElement.style.backgroundColor = CSScolorValue;
        }

        //---------------------------------------------------------------------------------
        setFillColor(CSScolorValue) {
            this.svgElement.style.fill = CSScolorValue;
        }

        //---------------------------------------------------------------------------------
        setSvgSpriteData(svgSpriteData) {
            this.svgElement.setAttribute('viewBox', svgSpriteData.viewBox);
            this.useSvgElement.setAttribute('href', svgSpriteData.href);
        }
}