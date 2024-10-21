class StartView extends BaseView {
    #startButtonElement;

    constructor(domElement) {
        super(domElement);

        this.handlerClickButton = null;

        this.#startButtonElement = document.getElementById('start-button');

        this.#startButtonElement.addEventListener("click", (event) => {
            event.preventDefault();
            this.handlerClickButton(); 
        });

        this.#startButtonElement.addEventListener('touchstart', (event) => {
            event.preventDefault();
        }, 
        {passive: false});


        this.#startButtonElement.addEventListener("mouseup", (event) => {
            event.preventDefault();
            this.handlerClickButton(); 
        });



    }

    bindStartClickButton(handler) {
        this.handlerClickButton = handler;
    }
}