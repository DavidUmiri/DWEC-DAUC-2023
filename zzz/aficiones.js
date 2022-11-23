function enviar() {
  // cogemos los inputs
  let inputs = document.querySelectorAll("input[type=text]"); // nodo
  // cogemos los divs respuestas
  let divs = document.querySelectorAll("div.respuesta"); // nodo
  // recorremos los inputs
  for (let i = 0; i < inputs.length; i++) {
    // que el valor de los inputs sea distinto de vacío
    if (inputs[i].value != "") {
      // comprobar que los parrafos no existan
      if (divs[i].getElementsByTagName("p").length === 0) {
        // creamos los nuevos parrafos que contendran las respuestas de los inputs
        let parrafo_nuevo = document.createElement("p");
        parrafo_nuevo.innerHTML = inputs[i].value;
        divs[i].appendChild(parrafo_nuevo);
        // darle class al h2 y al p nuevo para cambiarles el color
        parrafo_nuevo.setAttribute("class", "azul");
        let h2 = document.querySelectorAll(".rojo");
        h2[i].classList.add("verde");
      } else {
        // actualizamos los parrafos
        divs[i].getElementsByTagName("p")[0].innerHTML = inputs[i].value;
      }
    } else {
      divs[i].getElementsByTagName("p")[0].innerHTML = inputs[i].value;
    }
  }
}
