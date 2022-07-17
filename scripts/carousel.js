

export function carousel() {
    // Variables

    let IMAGENES

    if(document.querySelector(".carousel").id == "carousel01") {
        IMAGENES = [
            '/assets/images/indexClients01.jpg',
            '/assets/images/indexClients02.jpg',
            '/assets/images/indexClients03.jpg',
            '/assets/images/indexClients04.jpg',
            '/assets/images/indexClients05.jpg',
            '/assets/images/indexClients06.jpg'
        ];
    } else if(document.querySelector(".carousel").id == "carousel02") {

    }
    
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;
    let $texto = document.querySelector('#textBox')
    let $textoArray = [...document.querySelectorAll('.textBox')]
    let $tittleArray = [...document.querySelectorAll('.tittleBox')]

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        $textoArray.map(item => {
            if(item.dataset.caid == posicionActual) {
                item.classList.add("boxShow")
                item.classList.remove("boxHide")
            } else {
                item.classList.remove("boxShow")
                item.classList.add("boxHide")
            }
        })

        $tittleArray.map(item => {
            if(item.dataset.caid == posicionActual) {
                item.classList.add("boxShow")
                item.classList.remove("boxHide")
            } else {
                item.classList.remove("boxShow")
                item.classList.add("boxHide")
            }
        })

    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}