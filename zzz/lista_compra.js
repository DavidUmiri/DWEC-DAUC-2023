function cargarElementos() {
  let productos = document.querySelectorAll("#lista li");
  // vamos a recorrer los nodos productos para insertarlos en un array
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i].innerHTML;
    let array = [p];
    console.log(array.sort());
  }
}

window.onload = cargarElementos;

function anadirElemento() {
  // cogemos las variables
  let lista = document.getElementById("lista");
  let producto_nuevo = document.getElementById("articulo");

  // comprobamos que el producto no esté vacío
  if (producto_nuevo.value == "") {
    console.log("Introduce un producto");
  } else {
    // creamos el nuevo li para insertarlo en la lista
    let nuevo_li = document.createElement("li");
    nuevo_li.innerHTML = producto_nuevo.value;
    lista.appendChild(nuevo_li);
    producto_nuevo.value = "";
  }
  cargarElementos();
}
