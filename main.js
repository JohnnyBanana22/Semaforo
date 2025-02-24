const semaforo = [
    {
        verde: document.querySelector('.semaforo1 .verde'),
        amarillo: document.querySelector('.semaforo1 .amarillo'),
        rojo: document.querySelector('.semaforo1 .rojo')
    },
    {
        verde: document.querySelector('.semaforo2 .verde'),
        amarillo: document.querySelector('.semaforo2 .amarillo'),
        rojo: document.querySelector('.semaforo2 .rojo')
    },
    {
        verde: document.querySelector('.semaforo3 .verde'),
        amarillo: document.querySelector('.semaforo3 .amarillo'),
        rojo: document.querySelector('.semaforo3 .rojo')
    },
    {
        verde: document.querySelector('.semaforo4 .verde'),
        amarillo: document.querySelector('.semaforo4 .amarillo'),
        rojo: document.querySelector('.semaforo4 .rojo')
    },
];

let numeroAzar = Math.floor(Math.random() * 4);
let semaforoActual = numeroAzar;

function iniciarPrograma() {
    for (let i = 0; i < 4; i++) {
    semaforo[i].rojo.classList.remove('rojo');
    semaforo[i].rojo.classList.add('rojoPrendido');
    }
    secuenciaDeCambios();
}
iniciarPrograma();

function secuenciaDeCambios() {
    ponerVerde();
    setTimeout(parpadeoAmarillo, 4000);
}

function ponerVerde() {
    semaforo[semaforoActual].rojo.classList.remove('rojoPrendido');
    semaforo[semaforoActual].rojo.classList.add('rojo');

    semaforo[semaforoActual].verde.classList.add('verdePrendido');
    semaforo[semaforoActual].verde.classList.remove('verde');
}

function parpadeoAmarillo() {
    semaforo[semaforoActual].verde.classList.remove('verdePrendido');
    semaforo[semaforoActual].verde.classList.add('verde');

    semaforo[semaforoActual].amarillo.classList.add('amarilloPrendido');
    semaforo[semaforoActual].amarillo.classList.remove('amarillo');
    intervaloAmarillo1 = setInterval(() => {
        semaforo[semaforoActual].amarillo.classList.toggle('amarilloPrendido'); // Agregar o remover la clase "activo"
    }, 1000);
    intervaloAmarillo2 = setInterval(() => {
        semaforo[semaforoActual].amarillo.classList.toggle('amarillo'); // Agregar o remover la clase "activo"
    }, 1000);

    setTimeout(() => {
        clearInterval(intervaloAmarillo1); // Detener el primer intervalo
        clearInterval(intervaloAmarillo2); // Detener el segundo intervalo
        ponerRojo();
    }, 5000);
}

function ponerRojo() {
    semaforo[semaforoActual].rojo.classList.add('rojoPrendido');
    semaforo[semaforoActual].rojo.classList.remove('rojo');
    semaforo[semaforoActual].amarillo.classList.remove('amarilloPrendido');
    semaforo[semaforoActual].amarillo.classList.add('amarillo');


    if (semaforoActual === 0) {
        semaforoActual = 1 
    } else if (semaforoActual === 1) {
        semaforoActual = 3
    } else if (semaforoActual === 3) {
        semaforoActual = 2
    } else if (semaforoActual === 2) {
        semaforoActual = 0
    } 
    console.log(semaforoActual);
    setTimeout(secuenciaDeCambios, 4000);
}