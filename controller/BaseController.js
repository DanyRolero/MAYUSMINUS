class BaseController {
    #viewsList = [];

    //---------------------------------------------------------------------------------
    addView(nameView, view) {
        this.#viewsList[nameView] = view;
    }

    //---------------------------------------------------------------------------------
    showOnlyView(nameView) {
        for(var view in this.#viewsList) this.#viewsList[view].hideView();
        this.#viewsList[nameView].showView();
    }

    //---------------------------------------------------------------------------------
    get viewList() { return this.#viewsList; }
}