class OptionsView extends BaseView {
    #toggleSoundButton;
    #toggleMayusMinusButton;
    #fontFamilyButton_1;
    #fontFamilyButton_2;
    #fontFamilyButton_3;
    #levelButton_1;
    #levelButton_2;
    #levelButton_3;
    #levelButton_4;

    
    constructor(domElement) {
        super(domElement);

        this.handlerToggleSoundClick;
        this.handlerToggleMayusMinusClick;
        this.handlerSelectFontFamilyClick;
        this.handlerSelectLevelClick;

        this.#toggleSoundButton = document.getElementById('toggle-sound-buton');
        this.#toggleSoundButton.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.handlerToggleSoundClick();
        }, {passive: false});
        this.#toggleSoundButton.addEventListener('mousedown', () => this.handlerToggleSoundClick());

        this.#toggleMayusMinusButton = document.getElementById('toggle-mayus-minus-button');
        this.#toggleMayusMinusButton.addEventListener('mousedown', () => this.handlerToggleMayusMinusClick());

        this.#fontFamilyButton_1 = document.getElementById('select-font-family-button-1');
        this.#fontFamilyButton_1.addEventListener('mousedown', () => this.handlerSelectFontFamilyClick('sans'));

        this.#fontFamilyButton_2 = document.getElementById('select-font-family-button-2');
        this.#fontFamilyButton_2.addEventListener('mousedown', () => this.handlerSelectFontFamilyClick('serif'));

        this.#fontFamilyButton_3 = document.getElementById('select-font-family-button-3');
        this.#fontFamilyButton_3.addEventListener('mousedown', () => this.handlerSelectFontFamilyClick('handwrite'));

        this.#levelButton_1 = document.getElementById('select-level-button-1');
        this.#levelButton_1.addEventListener('mousedown', () => this.handlerSelectLevelClick(1));
        
        this.#levelButton_2 = document.getElementById('select-level-button-2');
        this.#levelButton_2.addEventListener('mousedown', () => this.handlerSelectLevelClick(2));

        this.#levelButton_3 = document.getElementById('select-level-button-3');
        this.#levelButton_3.addEventListener('mousedown', () => this.handlerSelectLevelClick(3));

        this.#levelButton_4 = document.getElementById('select-level-button-4');
        this.#levelButton_4.addEventListener('mousedown', () => this.handlerSelectLevelClick(4));

        
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