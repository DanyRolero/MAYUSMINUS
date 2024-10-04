class OptionsView {
    #viewElement;
    #toggleSoundButton;
    #toggleMayusMinusButton;
    #fontFamilyButton_1;
    #fontFamilyButton_2;
    #fontFamilyButton_3;
    #levelButton_1;
    #levelButton_2;
    #levelButton_3;
    #levelButton_4;

    
    constructor() {
        this.#viewElement = document.getElementById('options-view');

        this.handlerToggleSoundClick;
        this.handlerToggleMayusMinusClick;
        this.handlerSelectFontFamilyClick;
        this.handlerSelectLevelClick;

        this.#toggleSoundButton = document.getElementById('toggle-sound-buton');
        this.#toggleSoundButton.addEventListener('click', () => this.handlerToggleSoundClick());

        this.#toggleMayusMinusButton = document.getElementById('toggle-mayus-minus-button');
        this.#toggleMayusMinusButton.addEventListener('click', () => this.handlerToggleMayusMinusClick());

        this.#fontFamilyButton_1 = document.getElementById('select-font-family-button-1');
        this.#fontFamilyButton_1.addEventListener('click', () => this.handlerSelectFontFamilyClick('sans'));

        this.#fontFamilyButton_2 = document.getElementById('select-font-family-button-2');
        this.#fontFamilyButton_2.addEventListener('click', () => this.handlerSelectFontFamilyClick('serif'));

        this.#fontFamilyButton_3 = document.getElementById('select-font-family-button-3');
        this.#fontFamilyButton_3.addEventListener('click', () => this.handlerSelectFontFamilyClick('handwrite'));

        this.#levelButton_1 = document.getElementById('select-level-button-1');
        this.#levelButton_1.addEventListener('click', () => this.handlerSelectLevelClick(1));
        
        this.#levelButton_2 = document.getElementById('select-level-button-2');
        this.#levelButton_2.addEventListener('click', () => this.handlerSelectLevelClick(2));

        this.#levelButton_3 = document.getElementById('select-level-button-3');
        this.#levelButton_3.addEventListener('click', () => this.handlerSelectLevelClick(3));

        this.#levelButton_4 = document.getElementById('select-level-button-4');
        this.#levelButton_4.addEventListener('click', () => this.handlerSelectLevelClick(4));
        
    }

    //---------------------------------------------------------------------------------
    hideView() {
        this.#viewElement.classList.add('hidden');
    }

    //---------------------------------------------------------------------------------
    showView() {
        this.#viewElement.classList.remove('hidden');
    }

    //---------------------------------------------------------------------------------
    // BIND FUNCTIONS
    //---------------------------------------------------------------------------------
    bindSoundButtonClick(handle) {
        this.handlerToggleSoundClick = handle; 
    }

    //---------------------------------------------------------------------------------
    bindToggleMayusMinusClick(handle) {
        this.handlerToggleMayusMinusClick = handle;
    }

    //---------------------------------------------------------------------------------
    bindSelecFontFamilyClick(handle) {
        this.handlerSelectFontFamilyClick = handle;
    }

    //---------------------------------------------------------------------------------
    bindSelectLevelClick(handle) {
        this.handlerSelectLevelClick = handle;
    }
}