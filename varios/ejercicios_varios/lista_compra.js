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
}

function borrarLista() {
  let lista = document.getElementById("lista");
  let productos = document.querySelectorAll("#lista li");
  // recorremos los nodos productos para borrarlos de la lista
  for (let i = 0; i < productos.length; i++) {
    lista.removeChild(productos[i]);
  }
}

function ordenarElementos() {
  let productos = document.querySelectorAll("#lista li");
  let array = [];
  // vamos a recorrer los nodos productos
  for (let i = 0; i < productos.length; i++) {
    // insertamos su contenido en un array
    let contenido = productos[i].innerHTML;
    // console.log(contenido);
    array[i] = contenido;
  }
  // console.log(array);
  // ordenamos el array
  array.sort();
  // metemos el contenido ordenado en la lista
  for (let i = 0; i < array.length; i++) {
    let nuevo_li = document.createElement("li");
    let lista = document.getElementById("lista");
    nuevo_li.innerHTML = array[i];
    lista.appendChild(nuevo_li);
  }
}

function borrar() {}
