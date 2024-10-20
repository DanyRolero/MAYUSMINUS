//---------------------------------------------------------------------------------
// Evitar deslizamientos
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, { passive: false });

//---------------------------------------------------------------------------------
// Evitar pinzar para hacer zoom
document.addEventListener('gesturestart', function(event) { event.preventDefault(); }, false);

//---------------------------------------------------------------------------------
// Prevenir zoom al tocar dos veces seguidas en un elemento
let lastTouchEnd = 0;

document.addEventListener('touchend', function(event) {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
//---------------------------------------------------------------------------------
let app = new GamePlayController(); 