class MayusMinusUI {
    addQuestionChar(content) {
        this.currentQuestionCharHTML = document.createElement('div');
        this.currentQuestionCharHTML.id = 'current-char-question';
        this.currentQuestionCharHTML.textContent = content;
        document.body.appendChild(this.currentQuestionCharHTML);
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