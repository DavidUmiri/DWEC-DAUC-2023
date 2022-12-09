let tablero = [];
let tablero_recursivo = [];
// const TAM_MAX = 10;

// mapa de configuración
const buscaminas = {
  "TAM_MAX": 10,
  "NUM_BOMBAS": 50
}

function generartablero() {
  // recorremos las filas hasta el tamaño máximo establecido en el mapa
  for (let i = 0; i < buscaminas.TAM_MAX; i++) {
    tablero[i] = new Array(buscaminas.TAM_MAX);
    tablero_recursivo[i] = new Array(buscaminas.TAM_MAX);
    // recorremos las columnas y en cada posición establecemos el valor de cero
    for (let j = 0; j < buscaminas.TAM_MAX; j++) {
      tablero[i][j] = 0;
      tablero_recursivo[i][j] = 0;
    }
  }
}

// función anónima de tipo flecha que devuelve un número aleatorio entre 0 y 10
let numeroAletorio = () => {
  return parseInt(10 * Math.random());
};

// colocamos las bombas en el tablero
function colocarbombas() {
  let cont = 0;
  let i = 0;
  let j = 0;
  // while (cont <= (buscaminas.TAM_MAX * buscaminas.TAM_MAX) / 2) 
  while (cont <= buscaminas.NUM_BOMBAS - 1) {
    i = numeroAletorio();
    j = numeroAletorio();
    // si en la fila[i] columna[j] se encontramos un 0 lo pasamos a 1
    if (tablero[i][j] == 0) {
      tablero[i][j] = 1;
      cont++;
    }
  }
}

// generartablero()
// colocarbombas()
//document.write(tablero);

function dibujarTablero() {
  // ¿Ubicación de la tabla?
  // cogemos el tablero del html
  let tableroHTML = document.getElementById("idTablero");

  // Crear la tabla
  let tabla = document.createElement("table");
  // establacemos el siguiente atributo para el ancho del borde 
  tabla.setAttribute("border", 2);
  //console.log(tabla)

  //Insertar o dibujar en el documento.
  tableroHTML.appendChild(tabla);

  // Dibujamos las filas
  for (let i = 0; i < buscaminas.TAM_MAX; i++) {
    // creamos las filas
    let fila = document.createElement("tr");
    for (let j = 0; j < buscaminas.TAM_MAX; j++) {
      // creamos las columnas y les asignamos un identificador
      let celda = document.createElement("td");
      celda.innerHTML = `${tablero[i][j]}`;
      celda.id = `idCelda_${i}_${j}`;
      // metemos las celdas en las filas
      fila.appendChild(celda);
    }
    // metemos las filas en la tabla
    tabla.appendChild(fila);
  }
}

function calcularMinas(e) {
  console.log(e);
  console.log(`Has pulsado la celda ${e.target.id}`);
  // dividimos las coordenadas separadas con guión bajo para meterlos en las variables x e y
  let coordenadas = e.target.id.split("_");
  let x = coordenadas[1];
  let y = coordenadas[2];
  // console.log(`Coordenadas x ${x} , y = ${y}`)
}

function asociarEventClick() {
  // selecciona cada td cuyo atributo id comience con idCelda
  let celdas = document.querySelectorAll('td[id^="idCelda"]');
  // para cada cada celda dos eventos click => click izquierdo, contextmenu => click derecho
  celdas.forEach((e) => e.addEventListener("click", mostrarCoordenadas));
  celdas.forEach((e) => e.addEventListener("contextmenu", colocarbandera));
}

function mostrarCoordenadas(event) {
  //console.log(event.target.id)
  let coordenadas = event.target.id.split("_");
  let x = coordenadas[1];
  let y = coordenadas[2];
  console.log(x, y);
  // click izquierdo fondo verde
  event.target.style.background = "green";
  liberarRecursivo(x, y);
}

function colocarbandera(event) {
  // preventDefault: cualquier acción por defecto que deba producirse como resultado de este evento no ocurrirá, cancela el evento
  event.preventDefault();
  // click derecho bandera
  event.target.innerHTML = "🚩";
  console.log("vas a colocar una bandera");
}

function liberarRecursivo(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  //let cercanos = [[x,y-1] , [x-1,y-1] , [x-1 , y] , [x-1 , y+1] , [x , y+1] , [x+1 , y+1] , [x+1 , y ] , [x+1 , y-1] ]
  let cercanos = [
    [x, y - 1],
    [x - 1, y],
    [x, y + 1],
    [x + 1, y],
  ];

  if (tablero[x][y] == 0) {
    for (let i = 0; i < cercanos.length; i++) {
      console.log(`Analizo ${cercanos[i]}`);
      if (cercanos[i][0] >= 0 && cercanos[i][1] >= 0) {
        if (cercanos[i][0] < buscaminas.TAM_MAX && cercanos[i][1] < buscaminas.TAM_MAX) {
          if (
            tablero[cercanos[i][0]][cercanos[i][1]] == 0 &&
            tablero_recursivo[cercanos[i][0]][cercanos[i][1]] == 0
          ) {
            document.getElementById(
              `idCelda_${cercanos[i][0]}_${cercanos[i][1]}`
            ).style.background = "blue";
            tablero_recursivo[cercanos[i][0]][cercanos[i][1]] = "v";
            liberarRecursivo(cercanos[i][0], cercanos[i][1]);
          }
        }
      }
    }
  }
}

generartablero();
colocarbombas();
dibujarTablero();
asociarEventClick();