class AbstractView {
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
    }

    //---------------------------------------------------------------------------------
    // Oculta el elemento representado por la vista si estaba visible
    hideView() {
        this.#viewElement.classList.add('hidden');
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
    // Actualiza el contenido del elemento representado por la vista
    // Cada vista debe implementar su método updateView según sus necesidades
    // @param data:  
    updateView(data) {}
}