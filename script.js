//---------------------------------------------------------------------------------
// VARIABLES
//---------------------------------------------------------------------------------
const chars = [
    'a','b','c','d','e',
    'f','g','h','i','j',
    'k','l','m','n','ñ',
    'o','p','q','r','s',
    't','u','v','w','x',
    'y','z'
];

Object.freeze(chars);

let remainingsChars;
let currentQuestionChar = '?';

let currentAnswerChars = [];

let failedChars = [];

let currentLevel = 2;
let upperCase = true;

let currentQuestionCharHTML = document.getElementById('current-char-question');
let currentAnswerCharsHTML = document.getElementById('current-chars-answers');
let resultMessageHTML = document.getElementById('result-message');

//---------------------------------------------------------------------------------
// CHARS FUNCTIONS
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// Establecer alfabeto inicial como letras restantes
function resetRemainingChars() {
    remainingsChars = chars.slice(0,chars.length);
    failedChars = [];
}


//---------------------------------------------------------------------------------
// Sacar una letra del abecedario aleatoriamente de entre las que se encuentran disponibles
function updateCurrentQuestionChar() {
    if(remainingsChars.length == 0) throw new Error("No more remaining chars");
    
    let randomIndex = Math.floor(Math.random() * remainingsChars.length);
    currentQuestionChar = remainingsChars.splice(randomIndex, 1)[0];
    currentAnswerChars.push(currentQuestionChar);
}

//---------------------------------------------------------------------------------
// Obtener letras de opciones aleatoriamente
function addRandomAnswerChar() {
    if(currentAnswerChars.length >= chars.length) throw new Error("No more characters in the alphabet");
    let randomAnswerChar;
    do {
        randomAnswerChar = chars[Math.floor(Math.random() * chars.length)];
    } while (currentAnswerChars.includes(randomAnswerChar));

    currentAnswerChars.push(randomAnswerChar);
}

//---------------------------------------------------------------------------------
function addRandomAnswerCharsFromLevel(level) {
    for(let i = 0; i < level; i++) addRandomAnswerChar();
}

//---------------------------------------------------------------------------------
// Revolver orden de posibles respuestas
function shuffleOrderAnswerChars() {
    let shuffleredAnswers = [];
    while(currentAnswerChars.length > 0) {
        let randomIndex = Math.floor(Math.random() * currentAnswerChars.length);
        shuffleredAnswers.push(currentAnswerChars.splice(randomIndex, 1)[0]);
    }
    currentAnswerChars = shuffleredAnswers;
}


//---------------------------------------------------------------------------------
// HTML FUNCTIONS
//---------------------------------------------------------------------------------
function updateCurrentQuestionCharHTML() {
    if(upperCase) {
        currentQuestionCharHTML.innerHTML = currentQuestionChar.toLocaleUpperCase();
        return;
    }
    currentQuestionCharHTML.innerHTML = currentQuestionChar;
}

//---------------------------------------------------------------------------------
function updateAnswerCharsHTML() {
    currentAnswerCharsHTML.innerHTML = '';
    for(let i = 0; i < currentAnswerChars.length; i++) {
        let newHTMLbutton = document.createElement('button');
        newHTMLbutton.textContent = upperCase ? currentAnswerChars[i] : currentAnswerChars[i].toLocaleUpperCase();
        newHTMLbutton.addEventListener('click', selectChar.bind(newHTMLbutton));
        currentAnswerCharsHTML.appendChild(newHTMLbutton);
    }
}

//---------------------------------------------------------------------------------
// GAMEPLAY FUNCTIONS
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// Reaccionar al evento de pulsar en la letra
function selectChar() {
    if(this.textContent.toLowerCase() == currentQuestionChar.toLocaleLowerCase()) {
        win();
        return;
    }
    loose();
    failedChars.push()
    this.disabled = true;
}

//---------------------------------------------------------------------------------
//Lo que sucede al pulsar el botón de la letra correcta
function win() {
    resultMessageHTML.textContent = 'MUY BIEN';

    setTimeout(() => {
        resultMessageHTML.textContent = '';
        nextChar();
    }, 1000);
}

function loose() {
    resultMessageHTML.textContent = 'OTRA VEZ';
}

function nextChar() {
    currentAnswerChars = [];
    updateCurrentQuestionChar();
    addRandomAnswerCharsFromLevel(currentLevel);
    shuffleOrderAnswerChars();
    updateCurrentQuestionCharHTML();
    updateAnswerCharsHTML();
}

function restart() {
    resetRemainingChars();
    updateCurrentQuestionChar();
    addRandomAnswerCharsFromLevel(currentLevel);
    shuffleOrderAnswerChars();
    updateCurrentQuestionCharHTML();
    updateAnswerCharsHTML();
}

function repeatOnlyFailChars() {

}


//---------------------------------------------------------------------------------
// PROGRAM
//---------------------------------------------------------------------------------
restart();