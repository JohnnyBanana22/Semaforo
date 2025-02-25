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

const descripcion = document.getElementById('descripcion');

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
    setTimeout(parpadeoAmarillo, 3000);
}

function ponerVerde() {
    semaforo[semaforoActual].rojo.classList.remove('rojoPrendido');
    semaforo[semaforoActual].rojo.classList.add('rojo');

    semaforo[semaforoActual].verde.classList.add('verdePrendido');
    semaforo[semaforoActual].verde.classList.remove('verde');
}

function parpadeoAmarillo() {

    intervaloAmarillo1 = setInterval(() => {
        semaforo[semaforoActual].verde.classList.toggle('verdePrendido'); // Agregar o remover la clase "activo"
    }, 1000);
    intervaloAmarillo2 = setInterval(() => {
        semaforo[semaforoActual].verde.classList.toggle('verde'); // Agregar o remover la clase "activo"
    }, 1000);



    setTimeout(() => {
        clearInterval(intervaloAmarillo1); // Detener el primer intervalo
        clearInterval(intervaloAmarillo2); // Detener el segundo intervalo
        ponerAmarillo();
    }, 5000);
}

function ponerAmarillo() {
    semaforo[semaforoActual].amarillo.classList.add('amarilloPrendido');
    semaforo[semaforoActual].amarillo.classList.remove('amarillo');

    semaforo[semaforoActual].verde.classList.remove('verdePrendido');
    semaforo[semaforoActual].verde.classList.add('verde');
    setTimeout(() => {
        clearInterval(intervaloAmarillo1); // Detener el primer intervalo
        clearInterval(intervaloAmarillo2); // Detener el segundo intervalo
        ponerRojo();
    }, 3000);

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

    setTimeout(secuenciaDeCambios, 1000);
}

function textosP() {
    descripcion.textContent = 'Chequea este semáforo funcional y novedoso.';

    setTimeout(() => {
        descripcion.textContent = 'Favor de hacer un poquito de zoom porque me da hueva cambiar tamaños.';
    }, 6000);

    setTimeout(() => {
        descripcion.textContent = 'El verde inicia en una posición al azar, al iniciar el programa.';
    }, 14000);

    setTimeout(() => {
        descripcion.textContent = 'Apreciemos el parpadeo estroboscópico de nuestra luz verde. Es casi mágico';
    }, 26000);

    setTimeout(() => {
        descripcion.textContent = 'Después de acontecer ésta maravillosa experiencia intermitente pasamos al amarillo que nos recuerda los cálidos campos de trigo de mi natal Italia.';
    }, 32000);

    setTimeout(() => {
        descripcion.textContent = 'Por último admiremos el color rojo, color de la pasión desbordante, la energía indomable y la vitalidad que enciende los sentidos';
    }, 38000);

    setTimeout(() => {
        descripcion.textContent = 'Es el tono de la sangre que corre por nuestras venas, del fuego que consume y renueva, del atardecer que arde en el horizonte.';
    }, 46000);

    setTimeout(() => {
        descripcion.textContent = 'Simboliza poder, deseo, peligro y revolución. En la naturaleza, es la advertencia y la atracción; en el arte, es la emoción pura hecha pigmento';
    }, 54000);

    setTimeout(() => {
        descripcion.textContent = 'No es un color que pase desapercibido: el rojo exige ser visto, sentido y experimentado';
    }, 62000);

    setTimeout(() => {
        descripcion.textContent = 'Aunque en éste caso y por desgracia, significa alto.';
    }, 70000);

    setTimeout(() => {
        descripcion.textContent = 'Gracias por apreciar esta basura de programa y puto el que lo lea';
    }, 78000);
}

textosP();
