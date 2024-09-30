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

        //this.#viewElement = document.getElementById('options-view');

        this.#toggleSoundButton = document.getElementById('toggle-sound-buton');
        this.#toggleSoundButton.addEventListener('click', () => this.handlerToggleSoundClick());

        this.#toggleMayusMinusButton = documen.getElementById('toggle-mayus-minus-button');
        this.#toggleMayusMinusButton.addEventListener('click', () => this.handlerToggleMayusMinusClick());

        this.#fontFamilyButton_1 = document.getElementById('select-font-family-button-1');
        this.#fontFamilyButton_1.addEventListener('click', () => this.handleSelectFontFamilyClick(font));

        this.#fontFamilyButton_2 = document.getElementById('select-font-family-button-2');
        this.#fontFamilyButton_2.addEventListener('click', () => this.handleSelectFontFamilyClick(font));

        this.#fontFamilyButton_3 = document.getElementById('select-font-family-button-3');
        this.#fontFamilyButton_3.addEventListener('click', () => this.handleSelectFontFamilyClick(font));

        this.#levelButton_1 = document.getElementById('select-level-button-1');
        this.#levelButton_1.addEventListener('click', () => this.handleSelectLevelClick(level));
        
        this.#levelButton_2 = document.getElementById('select-level-button-2');
        this.#levelButton_2.addEventListener('click', () => this.handleSelectLevelClick(level));

        this.#levelButton_3 = document.getElementById('select-level-button-3');
        this.#levelButton_3.addEventListener('click', () => this.handleSelectLevelClick(level));

        this.#levelButton_4 = document.getElementById('select-level-button-4');
        this.#levelButton_4.addEventListener('click', () => this.handleSelectLevelClick(level));
        
    }

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

/*

<header>
<h1>MAYUSMINUS</h1>
<button id="toogle-sound">Sonido</button>
<button id="toggle-mayus-minus">A -> a<br> a -> A</button>
<button id="choose-font-family-1">ABC</button>
<button id="choose-font-family-2">ABC</button>
<button id="choose-font-family-3">ABC</button>
<button id="choose-dificulty-1">NIVEL 1</button>
<button id="choose-dificulty-1">NIVEL 2</button>
<button id="choose-dificulty-1">NIVEL 3</button>
<button id="choose-theme-1">Unicornios</button>
<button id="choose-theme-2">Spiderman</button>
<button id="choose-theme-3">Colors</button>
</header>
<main class="game-display">
<div id="current-char-question"></div>
<div id="result-message"></div>
<div id="current-chars-answers"></div>
</main>



*/