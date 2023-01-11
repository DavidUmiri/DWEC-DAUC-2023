let array = new Array();
let items = document.querySelectorAll("#lista li");

for (let i = 0; i < 3; i++) {
  array.push(items[i].innerHTML);
  array.sort();
}

// PENDIENTE: terminar la separacion de todos lo importes
let separar = array[0].split(":");
let importe = separar[1];

function anadirGasto() {
  let lista = document.getElementById("lista");
  let nuevo_li = document.createElement("li");
  let nuevo_gasto = document.getElementById("gasto").value;
  nuevo_li.innerHTML = nuevo_gasto;
  nuevo_li.setAttribute("onClick", "borrar(this)");
  lista.appendChild(nuevo_li);
  document.getElementById("gasto").value = "";
  array.push(nuevo_gasto);
}

function borrar() {}
