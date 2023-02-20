/*
function anadirGasto() {
  let nuevo = document.getElementById("gasto").value
  if (nuevo != "")
    arrayGastos.push(nuevo)
  arrayOrdenado = arrayGastos.sort();
  arrayGastos = arrayOrdenado
  for (let i = 0; i < lista.length; i++) {
    lista[i].remove()
  }
  arrayGastos.forEach(element => {
    padre.appendChild(document.createElement("li").innerHTML = element)
  });
}

let lista = []

document.querySelectorAll("li").forEach(element => {
  lista.push(element.innerHTML)
});

function gastos() {

  let listaGastos = document.querySelector("#lista")
  let elemento = document.getElementsByTagName("li")

  let gasto = document.getElementById("gasto")
  let liCreado = document.createElement("li")

  liCreado.innerHTML = gasto.value
  liCreado.setAttribute("onclick", "borrar(this)")

  listaGastos.appendChild(liCreado)

  lista.push(liCreado.innerHTML)
  lista.sort()

  for (let i = 0; i < lista.length; i++) {
    elemento[i].innerHTML = lista[i]
  }
  importe()
}


function borrar(elemento) {
  if (elemento.classList != "rojo") {
    elemento.className = "rojo"
    let importeTotal = parseInt(document.getElementById("idImporteTotal").innerHTML)
    importeTotal -= parseInt(elemento.innerHTML.split(" : ")[1])
    document.getElementById("idImporteTotal").innerHTML = importeTotal.toString()
  } else {
    elemento.classList.remove("rojo")
    let importeTotal = parseInt(document.getElementById("idImporteTotal").innerHTML)
    importeTotal += parseInt(elemento.innerHTML.split(" : ")[1])
    document.getElementById("idImporteTotal").innerHTML = importeTotal.toString()
  }
}

function importe() {
  let elementos = document.querySelectorAll("li")
  let importeTotal = 0

  elementos.forEach(element => {
    importeTotal += parseInt(element.innerHTML.split(" : ")[1])
  })
  document.getElementById("idImporteTotal").innerHTML = importeTotal.toString()
}
*/

const elementos = new Set();

function cargarElementos() {
  let items = document.querySelectorAll("#lista li");
  items.forEach((e) => elementos.add(e.innerHTML));
}

cargarElementos();

function anadirGasto() {
  let gasto = document.querySelector("#gasto");

  if (gasto.value == "" || elementos.has(gasto.value)) {
    console.log("Gasto vacío o ya existente");
    gasto.value = "";
    gasto.focus();
    return false;
  }

  let lista = document.querySelector("#lista");
  let items = document.getElementsByTagName("li");
  item = document.createElement("li");
  item.innerHTML = gasto.value;
  item.setAttribute("onClick", "borrar(this)");

  let insertado = false;
  for (let li of items) {
    result = gasto.value.localeCompare(li.innerHTML);

    if (!insertado && gasto.value.localeCompare(li.innerHTML) < 0) {
      lista.insertBefore(item, li);
      insertado = true;
    }
  }
  if (insertado === false) {
    lista.appendChild(item);
  }

  elementos.add(item.innerHTML);
  gasto.value = "";
  gasto.focus();
}

function borrar(elemento) {
  elementos.delete(elemento.innerHTML);
  elemento.remove();
}
