import { ControllerBase } from "./ControllerBase.js";

export class GamePlayController extends ControllerBase {
    constructor(model, view) {
        super(model, view);

        
    }

    // ----------------------------------------------------------------
    /* 
        Botón de sonido
        - Establece a false el atributo isSoundActive del modelo.
        - Cambia la apariencia del botón.
    */

    // ----------------------------------------------------------------
    /* 
        Botón de mano del usuario
        - Conmuta el estado del atributo handUser del modelo.
        - Guarda esta opción en el almacenamiento local persistente.
    */

    // ----------------------------------------------------------------
    /* 
        Botón de menú de opciones
        - Cambia a la vista de menú de opciones.
    */

    // ----------------------------------------------------------------
    /*
        Pregunta actual del personaje
        - Al tocar el area de pregunta, el sintetizador de voz pronunca el caracter.
    */

    // ----------------------------------------------------------------
    /*
        Respuestas de los caracteres actuales
       - Se detiene el sintetizador de voz.
       - Al tocar una de las respuestas
       - Se verifica si es la respuesta correcta.
       - Para ello se compara el valor del elemento data con el valor correcto.
         - Si es correcto:
            - Se emite un sonido de acierto.
            - Se añade una clase a la carta de respuesta.
            - Se bloquean las interacciones con las otras cartas de respuesta.
            - Pasado un tiempo se prepara el siguiente ejercicio.
        - Si es incorrecto:
            - Se detiene el sintetizador de voz.
            - Se emite un sonido de error.
            - Se añade una clase a la carta de respuesta.
            - Se bloquea la interacci´ón con la carta pulsada.
    */
}