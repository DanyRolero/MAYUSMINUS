class ButtonView extends AbstractView {
    
    constructor(domElement) {
        super(domElement);
        this.handleButtonClick = null;
        this.viewElement.addEventListener('click', () => this.handleButtonClick(this.viewElement));
    }

    //---------------------------------------------------------------------------------
    updateView(content) {
        this.viewElement.textContent = content;
    }

    //---------------------------------------------------------------------------------
    bindButtonClick(handler) {
        this.handleButtonClick = handler;
    }
}