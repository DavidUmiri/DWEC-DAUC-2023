function actualizarFecha() {
  let fecha = new Date();
  let fechaFormateada =
    "La hora es " + fecha.getHours() + fecha.getMinutes() + fecha.getSeconds();

  document.title(fechaFormateada);
}

setInterval(actualizarFecha, 1000);

clearInterval();
