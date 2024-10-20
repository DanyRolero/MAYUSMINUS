//---------------------------------------------------------------------------------
// Evitar deslizamientos
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, { passive: false });

//---------------------------------------------------------------------------------
// Evitar pinzar para hacer zoom
document.addEventListener('gesturestart', function(event) { event.preventDefault(); }, false);

//---------------------------------------------------------------------------------
// Prevenir zoom al tocar dos veces seguidas en un elemento
document.addEventListener('touchend', function(event) { event.preventDefault();}, false);




//---------------------------------------------------------------------------------
let app = new GamePlayController(); 