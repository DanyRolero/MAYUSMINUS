class SingleTextContentView extends AbstractView {
    constructor(domElement) {
        super(domElement);
    }

    //---------------------------------------------------------------------------------
    updateView(content) {
        this.viewElement.textContent = content;
    }
}