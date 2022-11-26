// VARIABLES GLOBALES a UTILIZAR
let nombre_j1, nombre_j2;

let tiradas_j1 = 0;
let tiradas_j2 = 0;

let puntos_j1 = 0;
let puntos_j2 = 0;

let contador_partidas = 0;
let infoPartida = null;

let ganador = null;
let perdedor = null;

function validarInformacionInicial() {
  if (document.getElementById("idInputNombreJ1").value == false) {
    swal("error", "Debes indicar el nombre del Jugador 1!", "error");

    return false;
  }
  if (document.getElementById("idInputNombreJ2").value == false) {
    swal("error", "Debes indicar el nombre del Jugador 2!", "error");

    return false;
  }

  if (document.getElementById("idNumTiradas").value == false) {
    swal("error", "Debes indicar el número de tiradas!", "error");

    return false;
  }

  let tiradas = parseInt(document.getElementById("idNumTiradas").value);
  if (isNaN(tiradas) || (!isNaN(tiradas) && tiradas <= 0)) {
    swal("error", "el número de tiradas debe ser superior a 0!", "error");

    return false;
  }

  return true;
}

function iniciar() {
  if (validarInformacionInicial() == false) {
    return false;
  }

  //Iniciamos contador de partidas
  contador_partidas = contador_partidas + 1;
  ganador = null;
  perdedor = null;
  document.getElementById("idBotonIniciar").setAttribute("disabled", "true");
  document.getElementById("dadoJ1").src = "img/0.png";
  document.getElementById("dadoJ2").src = "img/0.png";
  puntos_j1 = puntos_j2 = 0;

  // Recogida de valores
  nombre_j1 = document.getElementById("idInputNombreJ1").value;
  nombre_j2 = document.getElementById("idInputNombreJ2").value;
  tiradas_j1 = document.getElementById("idNumTiradas").value;
  tiradas_j2 = tiradas_j1;

  document.getElementById("idPuntuacionJ1").innerHTML = "PUNTUACIÓN: - 00 -";
  document.getElementById("idPuntuacionJ2").innerHTML = "PUNTUACIÓN: - 00 -";

  //Empieza el juego!!!
  // Cargar información en el tablero de los jugadores
  document.getElementById("idTablero").classList.remove("ocultar");

  document.getElementById("idNombreJ1").innerHTML = `JUGADOR 1 : ${nombre_j1}`;
  document.getElementById("idNombreJ2").innerHTML = `JUGADOR 2 : ${nombre_j2}`;

  document.getElementById("idBotonTirarJ1").removeAttribute("disabled");
  document.getElementById("idBotonTirarJ2").removeAttribute("disabled");

  document.getElementById("tiradasJ1").innerHTML =
    "TE QUEDAN " + tiradas_j1 + " TIRADAS";
  document.getElementById("tiradasJ2").innerHTML =
    "TE QUEDAN " + tiradas_j2 + " TIRADAS";
}

function tiradaJ1() {
  // Actualizar Dado
  let aleatorio = generarNumeroAleatorio();
  document.getElementById("dadoJ1").src = `img/${aleatorio}.png`;
  puntos_j1 = puntos_j1 + aleatorio;

  //Actualizar puntuación
  document.getElementById(
    "idPuntuacionJ1"
  ).innerHTML = `PUNTUACIÓN: ${puntos_j1}`;

  //Actualizar número de tiradas
  tiradas_j1 = parseInt(tiradas_j1) - 1;
  document.getElementById(
    "tiradasJ1"
  ).innerHTML = `TE QUEDAN ${tiradas_j1} TIRADAS`;

  // Comprobar si existe algún ganador
  comprobarGanador();
}

function tiradaJ2() {
  // Actualizar Dado
  let aleatorio = generarNumeroAleatorio();
  document.getElementById("dadoJ2").src = `img/${aleatorio}.png`;

  //Actualizar puntuación
  puntos_j2 = puntos_j2 + aleatorio;
  document.getElementById(
    "idPuntuacionJ2"
  ).innerHTML = `PUNTUACIÓN: ${puntos_j2}`;

  //Actualizar número de tiradas
  tiradas_j2 = tiradas_j2 - 1;
  document.getElementById(
    "tiradasJ2"
  ).innerHTML = `TE QUEDAN ${tiradas_j2} TIRADAS`;

  // Comprobar si existe algún ganador
  comprobarGanador();
}

function comprobarGanador() {
  if (tiradas_j1 == 0) {
    // ¿Ha terminado jugador 1?
    document.getElementById("idBotonTirarJ1").setAttribute("disabled", "true");
  }

  if (tiradas_j2 == 0) {
    // ¿Ha terminado jugador 2?
    document.getElementById("idBotonTirarJ2").setAttribute("disabled", "true");
  }

  if (tiradas_j2 == 0 && tiradas_j1 == 0) {
    // ¿Han terminado ambos jugadores?
    document.getElementById("idBotonIniciar").removeAttribute("disabled");
    if (puntos_j1 > puntos_j2) {
      swal(
        "Victoria",
        `Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!!`,
        "success"
      );

      ganador = nombre_j1;
      perdedor = nombre_j2;
    } else if (puntos_j1 < puntos_j2) {
      swal(
        "Victoria",
        `Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!!`,
        "success"
      );

      ganador = nombre_j2;
      perdedor = nombre_j1;
    } else {
      swal("Empate", `Partida Finalizada, ¡¡¡ EMPATE !!!`, "success");
    }

    document.getElementById("idBotonIniciar").removeAttribute("disabled");
  }

  ////
  //// UBICACIÓN MUY MUY IMPORTANTE!!!!!1
  ////
  gestionJugadores();
  let nueva_partida = new Partida();
}

/********************************************************
 *  APARTADO 1 : Implementar reloj del juego
 *******************************************************/

reloj();

function reloj() {
  let fecha = new Date();

  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  let fecha_actual = `${hora}:${minutos}:${segundos}`;
  // console.log(fecha_actual);
  let div_reloj = document.getElementById("idReloj");
  div_reloj.innerHTML = fecha_actual;
  setTimeout(reloj, 1000);
}

/********************************************************
 *  APARTADO 2 : Definir función para número aleatorio.
 *******************************************************/

function generarNumeroAleatorio() {
  // hacer un return con un valor entero aleatorio entre el 1 y el 6
  let numero_aleatorio = parseInt(Math.random() * 6) + 1;
  // console.log(numero_aleatorio);
  return numero_aleatorio;
}

/*************************************************************
 *  APARTADO 3 : Gestión de jugadores
 *************************************************************/

function gestionJugadores() {
  // console.log(nombre_j1);
  let jugadores = new Set();
  jugadores.add(nombre_j1);
  jugadores.add(nombre_j2);
  let lista_jugadores = document.getElementById("idListadoJugadores");
  let jugadores_html = document.querySelector("#idNombreJugadores");
  // lista_jugadores.innerHTML = "prueba";
  // jugadores.forEach((e)=>console.log(e));
  jugadores.forEach((e) => (jugadores_html.innerHTML = e));
  lista_jugadores.appendChild(jugadores_html);
}

/*************************************************************
 *  APARTADO 4 : Definir Clase partida
 *************************************************************/

class Partida {
  numero_partida;
  nombre_j1;
  nombre_j2;
  puntos_j1;
  puntos_j2;
  nombre_ganador;
  nombre_perdedor;

  constructor(
    numero_partida,
    nombre_j1,
    nombre_j2,
    puntos_j1,
    puntos_j2,
    nombre_ganador,
    nombre_perdedor
  ) {
    this._numero_partida = numero_partida;
    this._nombre_j1 = nombre_j1;
    this._nombre_j2 = nombre_j2;
    this._puntos_j1 = puntos_j1;
    this._puntos_j2 = puntos_j2;
    this._nombre_ganador = nombre_ganador;
    this._nombre_perdedor = nombre_perdedor;
  }
  getPuntos_j1() {
    return this._puntos_j1;
  }
  setPuntos_j1(valor) {
    this._puntos_j1 = valor;
  }
  getPuntos_j2() {
    return this._puntos_j2;
  }
  setPuntos_j2(valor) {
    this._puntos_j1 = valor;
  }
  static info() {
    return console.log(`Este juego ha sido creado por: David`);
  }
  toString() {
    return `Partida entre ${nombre_j1} y ${nombre_j2}`;
  }
  valueOf() {
    if (comprobarGanador == nombre_j1) {
      return puntos_j1;
    } else if (comprobarGanador == nombre_j2) {
      return puntos_j2;
    } else {
      return 0;
    }
  }
}

/********************************************************
 *  APARTADO 5 : Gestión de resultados
 *******************************************************/

let resultado = new Array();
resultado = [0, "nombre_j1", "ganador"];

let tabla_resultados = document.querySelector("#idEstadisticas");

let nuevo_tr = document.createElement("tr");
nuevo_tr.setAttribute("class", "mostrar");
nuevo_tr.setAttribute("onclick", "borrar(this)");
let nuevo_td = document.createElement("td");

for (i of resultado) {
  nuevo_td.innerHTML = resultado[i];
  nuevo_tr.appendChild(nuevo_td);
  tabla_resultados.appendChild(nuevo_tr);
}

function borrar(elemento) {
  elemento.remove();
}
