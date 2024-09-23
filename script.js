//-----------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------
const chars = [
    'a','b','c','d','e',
    'f','g','h','i','j',
    'k','l','m','n','ñ',
    'o','p','q','r','s',
    't','u','v','w','x',
    'y','z'
];

Object.freeze(chars);

let remainingsChars = chars.slice(0,chars.length);
let currentQuestionChar = '?';

let currentAnswerChars = [];

let failedChars = [];

let currentLevel = 1;

let currentQuestionCharHTML = document.getElementById('current-char-question');
let currentAnswerCharsHTML = document.getElementById('current-chars-answers');

//-----------------------------------------------------------
// FUNCTIONS
//-----------------------------------------------------------

//-----------------------------------------------------------
// Sacar una letra del abecedario aleatoriamente de entre las que se encuentran disponibles
function updateCurrentQuestionChar() {
    if(remainingsChars.length == 0) throw new Error("No more remaining chars");
    
    let randomIndex = Math.floor(Math.random() * remainingsChars.length);
    currentQuestionChar = remainingsChars.splice(randomIndex, 1);
    currentAnswerChars.push(currentQuestionChar);
}

//-----------------------------------------------------------
// Obtener letras de opciones aleatoriamente
function addRandomAnswerChar() {
    if(currentAnswerChars.length >= chars.length) throw new Error("No more characters in the alphabet");
    let randomAnswerChar;
    do {
        randomAnswerChar = chars[Math.floor(Math.random() * chars.length)];
    } while (currentAnswerChars.includes(randomAnswerChar));

    currentAnswerChars.push(randomAnswerChar);
}

//-----------------------------------------------------------
// Revolver orden de posibles respuestas
function shuffleOrderAnswerChars() {
    let shuffleredAnswers = [];
    while(currentAnswerChars.length > 0) {
        let randomIndex = Math.floor(Math.random() * currentAnswerChars.length);
        shuffleredAnswers.push(currentAnswerChars.splice(randomIndex, 1)[0]);
    }
    currentAnswerChars = shuffleredAnswers;
}


//-----------------------------------------------------------
// SHOWER FUNCTIONS
//-----------------------------------------------------------
function updateCurrentQuestionCharHTML() {
    currentQuestionCharHTML.innerHTML = currentQuestionChar;
}

function updateAnswerCarsHTML() {
    currentAnswerCharsHTML.innerHTML = '';
    for(let i = 0; i < currentAnswerChars.length; i++) {
        let newHTMLbutton = document.createElement('button');
        newHTMLbutton.textContent = currentAnswerChars[i];
        currentAnswerCharsHTML.appendChild(newHTMLbutton);
    }
}





// Añadir letra obtenida a la lista de letras aparecidas

// Cambiar mayúsculas por minúsculas

// Cambiar Familia de fuentes

// Cambiar nivel de dificultad

// Cambiar tema

// Activar desactivar sonido

// Opción Correcta

// Opción Incorrecta

// Letras que hay que repasar (opcional) al recorrer todo el abecedario

// Repasar solo las letras necesarias (opcional)

// Repetir de nuevo