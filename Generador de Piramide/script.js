let piramide = '';

const altura = document.getElementById('altura');
const caracter = document.getElementById('caracter');
const posicion = document.getElementById('posicion');
const generar = document.getElementById('generar');
const resultado = document.getElementById('piramide');

generar.addEventListener('click', () => {
    let contador = altura.value;
    let caracterElegido = caracter.value;

    if (contador === '') {
        contador = 5;
    } else if (isNaN(contador)) {
        contador = 5;
    }

    if (caracterElegido === '') {
        caracterElegido = '*';
    }

    if (posicion.value === '1') {
        for (let i = 0; i <= contador; i++) {
            for (let j = 0; j < i; j++) {
                piramide += caracterElegido;
            }
            piramide += '<br>';
        }
    } else if (posicion.value === '2') {
        for (let i = contador; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                piramide += caracterElegido;
            }
            piramide += '<br>';
        }
    } else {
        piramide = 'Por favor, selecciona una posición válida';
    }

    resultado.style.display = 'block';
    resultado.innerHTML = piramide;
    piramide = '';
});