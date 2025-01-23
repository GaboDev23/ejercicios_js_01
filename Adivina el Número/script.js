let numero = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const adivinaNumero = document.getElementById("numero");
const adivinar = document.getElementById("adivinar");
const resultado = document.getElementById('resultado');

adivinar.addEventListener("click", e => {
    e.preventDefault();

    console.log(adivinaNumero.value);

    let adivina = parseInt(adivinaNumero.value);

    if (adivina < 1 || adivina > 100 || isNaN(adivina) || adivina === '') {
        establecerResultado('alert', 'Error', 'El número debe estar entre 1 y 100', intentos);
    } else if (adivina > numero) {
        establecerResultado('error', 'Error', 'El número que ingresaste es demasiado alto', intentos);
    } else if (adivina < numero) {
        establecerResultado('error', 'Error', 'El número que ingresaste es demasiado bajo', intentos);
    } else {
        establecerResultado('correct', numero, `Felicidades lograste adivinar el número`, intentos);
        const reintentar = document.createElement('button');
        reintentar.innerHTML = 'Reintentar';

        resultado.appendChild(reintentar);
        reintentar.addEventListener('click', () => {
            window.location.reload();
        });
    }
});

const establecerResultado = (estado, tituloElemento, descripcionElemento, intentosElemento) => {
    resultado.classList.remove('alert');
    resultado.classList.remove('error');
    resultado.classList.remove('correct');
    resultado.classList.add(estado);
    resultado.style.display = 'block';

    if (estado !== 'alert' && estado !== 'correct') {
        intentos++;
    }

    const titulo = document.createElement('h2');
    const descripcion = document.createElement('p');
    const numeroIntentos = document.createElement('p');

    titulo.innerHTML = tituloElemento;
    descripcion.innerHTML = descripcionElemento;
    numeroIntentos.innerHTML = `Intentos: ${intentosElemento}`;

    resultado.innerHTML = '';
    resultado.appendChild(titulo);
    resultado.appendChild(descripcion);
    resultado.appendChild(numeroIntentos);
}