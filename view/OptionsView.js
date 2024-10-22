class OptionsView extends BaseView {
    #toggleSoundButton;
    #toggleMayusMinusButton;
    #fontFamilyButton;
    #levelButton;

    constructor(domElement) {
        super(domElement);

        this.handlerToggleSoundClick;
        this.handlerToggleMayusMinusClick;
        this.handlerSelectFontFamilyClick;
        this.handlerSelectLevelClick;

        this.#toggleSoundButton = document.getElementById('toggle-sound-button');
        this.#toggleSoundButton.addEventListener('touchstart', () => this.handlerToggleSoundClick(), {passive: false});

        this.#toggleMayusMinusButton = document.getElementById('toggle-mayus-minus-button');
        this.#toggleMayusMinusButton.addEventListener('touchstart', () => this.handlerToggleMayusMinusClick(), {passive: false});

        this.#fontFamilyButton = document.getElementById('change-font-family-button');
        this.#fontFamilyButton.addEventListener('touchstart', () => this.handlerSelectFontFamilyClick('sans'), {passive: false});

        this.#levelButton = document.getElementById('change-level-button');
        this.#levelButton.addEventListener('touchstart', () => this.handlerSelectLevelClick(), {passive: false});    
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

    //---------------------------------------------------------------------------------
    updateTextContentLevelButton(content) {
        this.#levelButton.innerHTML = content;
    }
}