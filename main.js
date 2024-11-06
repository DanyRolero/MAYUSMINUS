//---------------------------------------------------------------------------------
// Evitar deslizamientos
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, { passive: false });

//---------------------------------------------------------------------------------
// Evitar pinzar para hacer zoom
document.addEventListener('gesturestart', function(event) { event.preventDefault(); }, {passive: false});

fetch('assets/img/dekko-font-card-collection2.svg')
.then(response => response.text())
.then(data => {
    document.getElementById('svg-sprite-container').innerHTML = data;
    console.log('SVG Cargado');
    var view = new MainViewBase();
    view.addComponent(new CardCharViewComponent( {viewBox: '0 0 67 107', href: 'assets/img/dekko-font-card-collection2.svg#a'} ));
    
})
.catch(error => console.error('Error al cargar el sprite SVG:', error));