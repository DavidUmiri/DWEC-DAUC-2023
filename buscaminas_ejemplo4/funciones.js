// ESTA FUNCION RECIBE EL N DE FILAS Y EL N DE COLUMNAS POR PARAMETRO
function pintarTablero(numFilas, numColumnas) {
  // obtenemos el elemento tablero y lo guardamos en una variable
  let tablero = document.querySelector("#tablero");

  document.querySelector("html").style.setProperty("--num-filas", numFilas);
  document
    .querySelector("html")
    .style.setProperty("--num-columnas", numColumnas);

  for (let f = 0; f < numFilas; f++) {
    for (let c = 0; c < numColumnas; c++) {
      let newDiv = document.createElement("div");

      // les daremos un id a los div
      newDiv.setAttribute("id", "f" + f + "_c" + c);
      newDiv.dataset.fila = f;
      newDiv.dataset.columna = c;

      // evento con el boton derecho
      newDiv.addEventListener("contextmenu", marcar);

      // evento con el boton izquierdo
      newDiv.addEventListener("click", destapar);

      tablero.appendChild(newDiv);
    }
  }
}

function borrarTablero() {
  //borramos el tablero actual
  while (tablero.firstChild) {
    tablero.firstChild.removeEventListener("contextmenu", marcar);
    tablero.firstChild.removeEventListener("click", destapar);
    tablero.removeChild(tablero.firstChild);
  }
}

// PENDIENTE: 4. Generar el campo de minas

function marcar(evento) {}

function destapar(evento) {}
