/* 
    EVITAR COMPORTAMIENTOS POR DEFECTO EN DISPOSITIVOS MÓVILES Y TABLETAS
    - Evitar escroll en cualquier dirección para evitar la recarga de la página por deslizamiento.
    - Evitar los gestos multitouch como zoom o anterior o siguiente.
    - Suavizar las pulsaciones de los botones implementando eventos touch etc...


*/

//---------------------------------------------------------------------------------
// Evitar deslizamientos
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, { passive: false });

//---------------------------------------------------------------------------------
// Evitar pinzar para hacer zoom
document.addEventListener('gesturestart', function(event) { event.preventDefault(); }, false);


/*
//---------------------------------------------------------------------------------
let lastY = 0;
        let preventPullToRefresh = false;

        // Evento touchstart: Capturamos la posición inicial
        window.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            lastY = e.touches[0].clientY;
            preventPullToRefresh = window.scrollY === 0;
        });

        // Evento touchmove: Prevenimos el comportamiento si se desplaza hacia abajo en la parte superior
        window.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].clientY;
            const upwardScroll = lastY - currentY < 0;
            if (preventPullToRefresh && upwardScroll) {
                e.preventDefault();
            }
        }, { passive: false });




function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    console.log("Dispositivo móvil detectado");
    //alert('MOVIL');
} else {
    console.log("Dispositivo de escritorio detectado");
}
*/
var audioContext;
var audioBuffer;

document.getElementById('start-button').addEventListener('mousedown', () => {
    if(!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    fetch('assets/sounds/fx/correct_3.mp3')
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => { 
        audioBuffer = buffer;
        playAudio();
    });

    if(audioContext.state === 'suspended') audioContext.resume();
    else playAudio();
});





function playAudio() {
    if(!audioBuffer) return;

    var source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);
    
}


let app = new GamePlayController(); 