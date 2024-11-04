class DomElementWrapper {
    constructor(domElement) {
        this.domElement = domElement;
        this.domElementParent = null;
    }

    //---------------------------------------------------------------------------------
    show() {
        this.domElement.classList.remove('hidden');
    }

    //---------------------------------------------------------------------------------
    hide() {
        this.domElement.classList.add('hidden');
    }

    //---------------------------------------------------------------------------------
    add(domElementParent) {
        this.domElementParent = domElementParent;
        domElementParent.appendChild(this.domElement);
    }

    //---------------------------------------------------------------------------------
    remove() {
        this.domElementParent.removeChild(this.domElement);
    }
}