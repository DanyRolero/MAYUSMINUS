class OptionsView {
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
        this.handlerToggleSoundClick;
        this.handlerToggleMayusMinusClick;
        this.handlerSelectFontFamilyClick;
        this.handlerSelectLevelClick;

        this.#toggleSoundButton = document.getElementById('toggle-sound-buton');
        this.#toggleSoundButton.addEventListener('click', () => this.handlerToggleSoundClick());

        this.#toggleMayusMinusButton = document.getElementById('toggle-mayus-minus-button');
        this.#toggleMayusMinusButton.addEventListener('click', () => this.handlerToggleMayusMinusClick());

        this.#fontFamilyButton_1 = document.getElementById('select-font-family-button-1');
        this.#fontFamilyButton_1.addEventListener('click', () => this.handleSelectFontFamilyClick('sans'));

        this.#fontFamilyButton_2 = document.getElementById('select-font-family-button-2');
        this.#fontFamilyButton_2.addEventListener('click', () => this.handleSelectFontFamilyClick('serif'));

        this.#fontFamilyButton_3 = document.getElementById('select-font-family-button-3');
        this.#fontFamilyButton_3.addEventListener('click', () => this.handleSelectFontFamilyClick('handwrite'));

        this.#levelButton_1 = document.getElementById('select-level-button-1');
        this.#levelButton_1.addEventListener('click', () => this.handleSelectLevelClick(1));
        
        this.#levelButton_2 = document.getElementById('select-level-button-2');
        this.#levelButton_2.addEventListener('click', () => this.handleSelectLevelClick(2));

        this.#levelButton_3 = document.getElementById('select-level-button-3');
        this.#levelButton_3.addEventListener('click', () => this.handleSelectLevelClick(3));

        this.#levelButton_4 = document.getElementById('select-level-button-4');
        this.#levelButton_4.addEventListener('click', () => this.handleSelectLevelClick(4));
        
    }

    //---------------------------------------------------------------------------------
    // BIND FUNCTIONS
    //---------------------------------------------------------------------------------
    bindSoundButtonClick(handle) {
        this.handleToggleSoundClick = handle; 
    }

    //---------------------------------------------------------------------------------
    bindToggleMayusMinusClick(handle) {
        this.handleToggleMayusMinusClick = handle;
    }

    //---------------------------------------------------------------------------------
    bindSelecFontFamilyClick(handle) {
        this.handleSelectFontFamilyClick = handle;
    }

    //---------------------------------------------------------------------------------
    bindSelectLevelClick(handle) {
        this.handleSelectLevelClick = handle;
    }
}