class BaseView {
    #viewElement = null;

    constructor(domElement) {
        this.#viewElement = domElement;
    }

    //---------------------------------------------------------------------------------
    get viewElement() {return this.#viewElement;}

    //---------------------------------------------------------------------------------
    // Muestra el elemento que representa la vista si estaba oculto
    showView() {
        this.#viewElement.classList.remove('hidden');
        this.onShow();
    }

    //---------------------------------------------------------------------------------
    // Oculta el elemento representado por la vista si estaba visible
    hideView() {
        this.#viewElement.classList.add('hidden');
        this.onHide();
    }

    //---------------------------------------------------------------------------------
    // Añade el elmento representado por la vista a un elemento padre
    addView(parentElement) {
        parentElement.appendChild(this.#viewElement);
    }

    //---------------------------------------------------------------------------------
    // Elimina el elemento representado por la vista del elemento padre
    removeView(parentElement) {
        parentElement.removeChild(this.#viewElement);
    }

    //---------------------------------------------------------------------------------
    onHide() {}

    //---------------------------------------------------------------------------------
    onShow() {}
}