let fecha_completa = new Date();
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// cogemos las partes de la fecha completa
let dia_mes = fecha_completa.getDate();
let mes = fecha_completa.getMonth();
let año = fecha_completa.getFullYear();
let hora = fecha_completa.getHours();
let minutos = fecha_completa.getMinutes();
// lo colocamos
let nueva_fecha = `Hoy es día ${dia_mes} de ${meses[mes]} de ${año} y en estos momentos son las ${hora}:${minutos}`;
// comprobamos que funciona
console.log(nueva_fecha);
// lo colocamos en el documento
let parrafo_fecha = document.querySelector("#fecha");
parrafo_fecha.innerHTML = nueva_fecha;