let piramide = '';
let contador = prompt('Introduce el tamaño de la pirámide');
let posicion = prompt('Introduce la posición de la pirámide');

if (contador === '') {
    contador = 5;
} else if (isNaN(contador)) {
    contador = 5;
}

if (posicion === 'arriba') {
    for (let i = contador; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            piramide += '*';
        }
        piramide += '\n';
    }
} else if (posicion === 'abajo') {
    for (let i = 0; i <= contador; i++) {
        for (let j = 0; j < i; j++) {
            piramide += '*';
        }
        piramide += '\n';
    }
} else {
    piramide = 'Posición no válida';
}

console.log(piramide);