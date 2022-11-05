// calcularNumMinas( x , y ){....}
function calcularMinas(e) {
  console.log(e);
  console.log(`Has pulsado la celda ${e.target.id}`);

  let coordenadas = e.target.id.split("_");
  let x = coordenadas[1];
  let y = coordenadas[2];
  //console.log(`Coordenadas x ${x} , y = ${y}`)
}

function asociarEventClick() {
  let celdas = document.querySelectorAll('td[id^="idCelda"]'); // recuperar todas las celdas
  celdas.forEach((e) => e.addEventListener("click", mostrarCoordenadas)); // le decimos que se ejecute la funcion al hacer click
  celdas.forEach((e) => e.addEventListener("contextmenu", colocarbandera));
}

function mostrarCoordenadas(event) {
  //   console.log(event.target.id);
  let coordenadas = event.target.id.split("_");
  let x = coordenadas[1];
  let y = coordenadas[2];

  console.log(x, y);
}

function colocarbandera(event) {
  event.preventDefault(); // evita las opciones del click derecho
  event.target.style.background = "red"; // color rojo al hacer click derecho
  console.log("bandera");
}

// elemento.addEventListener("click",calcularMinas())
