// Creamos un intervalo que cada 15 segundos muestra mensaje hola
let idA = setInterval("alert(‘hola’);", 15000);

// Creamos un timeout que cuando pasen 3 segundos muestra mensaje adios
let idB = setTimeout("alert(‘adios’);", 3000);

// Creamos un timeout que cuando pasen 5 segundos muestra mensaje
let idC = setTimeout("alert(‘estonoseve’);", 5000);

// Cancelamos el ultimo timeout
clearTimeout(idC);

// Abrir una ventana
let nuevaVentana = window.open();
let nuevaVentana2 = window.open(
  "http://www.misitioWeb.com/ads",
  "Publicidad",
  "height=100, width=100"
);

// Cerrar ventana
let cerrarVentana = myWindow1.document.write(
  "<input type=button value=Cerrar onClick=window.close()>"
);

// Array, pop/push al final, unshift/shift sl principio
let a = [];
a.push(4);
a.push(5);
a.push(6);

// join: construye una cadena y coloca un separador
let c = join(a, "-");

// Ordenar reverse(), sort()
// Array functions
var array = ["a", "bb", "bc", "d"];
array.forEach(function (e, i) {
  alert("Elemento." + e + " en la posición" + i);
});
array.every((e) => e.length == 1); // false
array.some((e) => e.length == 2); // true
var nuevoArr = array.map((e) => e.length); // [1 , 2 , 2 , 1]
var nuevoArr = array.filter((e) => e[0] == "b"); // [‘bb’,’bc’]
var valor = array.find((e) => e[0] == "b"); //’bb’
// find(), filter()
// every(), some()
// foreach()

alumnos.forEach((a) => alert(`Hola alumno ${a}`));
// split() para 10 veces
