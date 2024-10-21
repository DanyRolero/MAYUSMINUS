//---------------------------------------------------------------------------------
// Evitar deslizamientos
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, { passive: false });

//---------------------------------------------------------------------------------
// Evitar pinzar para hacer zoom
document.addEventListener('gesturestart', function(event) { event.preventDefault(); }, {passive: false});

let app = null;
const speecher = new SpeecherModel(() => { app = new GamePlayController()});

//---------------------------------------------------------------------------------

