class ViewComponentBase {
    #domElement = null;

    constructor(domElement = document.createElement("div")) {
        this.#domElement = domElement;
    }

    //---------------------------------------------------------------------------------
    get domElement() {
        return this.#domElement;
    }

    //---------------------------------------------------------------------------------
    addComponent(viewComponent) {
        this.#domElement.appendChild(viewComponent.domElement);
    }

    //---------------------------------------------------------------------------------
    removeComponent(viewComponent) {
        this.#domElement.removeChild(viewComponent.domElement);
    }

    //---------------------------------------------------------------------------------
    cleanContent() {
        while (this.#domElement.firstChild) {
            this.#domElement.removeChild(this.#domElement.firstChild);
        }
    }

    //---------------------------------------------------------------------------------
    show() {
        this.#domElement.classList.remove("hidden");
    }

    //---------------------------------------------------------------------------------
    hide() {
        this.#domElement.classList.add("hidden");
    }

    //---------------------------------------------------------------------------------
    addClass(className) {
        this.#domElement.classList.add(className);
    }

    //---------------------------------------------------------------------------------
    removeClass(className) {
        this.#domElement.classList.remove(className);
    }

}
