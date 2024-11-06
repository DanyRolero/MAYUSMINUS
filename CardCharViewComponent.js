class CardCharViewComponent extends ViewComponentBase {

        //---------------------------------------------------------------------------------
        constructor(svgSpriteData) {
            super(document.createElement('div'));
            this.addClass('card-char-svg-comp');

            this.cardSVvgContainer = document.createElement('div');

            this.svgElement = document.createElement('svg');
            this.svgElement.setAttribute('viewBox', svgSpriteData.viewBox);

            this.useSvgElement = document.createElement('use');
            this.useSvgElement.setAttribute('href', svgSpriteData.href);

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