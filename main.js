import { MainViewBase } from './AppViewComponent.js';
import { CardCharVC } from './CardCharViewComponent.js';
import { CardCharVCTemplateLiteral } from './CardCharVC.js';
import { GameVC } from './GameVC.js';

//---------------------------------------------------------------------------------
// Evitar deslizamientos
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, { passive: false });

//---------------------------------------------------------------------------------
// Evitar pinzar para hacer zoom
document.addEventListener('gesturestart', function(event) { event.preventDefault(); }, {passive: false});

fetch('assets/img/dekko-font-card-collection.svg')
.then(response => response.text())
.then(data => {
    document.getElementById('svg-sprite-container').innerHTML = data;
    console.log('SVG Cargado');
})
.catch(error => console.error('Error al cargar el sprite SVG:', error));

var view = new MainViewBase();
var cr = new CardCharVCTemplateLiteral( {viewBox: '0 0 67 107', href: 'assets/img/dekko-font-card-collection.svg#a'} );
var gameView = new GameVC();
view.addComponent(gameView);