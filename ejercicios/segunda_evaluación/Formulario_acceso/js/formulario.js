/*********************************************************************************************
/*********************************************************************************************
        Rellenar el valor del campo nombre utilizando un "prompt" para introducir los datos
*********************************************************************************************
*********************************************************************************************/

// cuando un evento se produce, se crea un objeto event que contiene información sobre el evento
// si el usuario hace clic en un botón, el objeto event.target se refiere al botón en el que se hizo clic
// entonces, cuando la función de flecha se ejecuta en respuesta al evento "click", el objeto event.target hace referencia al elemento de entrada de texto con el id "id_input_text", ya que ese es el elemento que desencadenó el evento

document.getElementById('id_input_text').addEventListener("click", (event) => {
  event.target.value = prompt("Introduce tu nombre por favor: ");
});

/*********************************************************************************************
*********************************************************************************************
    Modificar el color del fondo del formulario
*********************************************************************************************
*********************************************************************************************/

for (let e of document.getElementsByName('form-color')) {
  e.addEventListener("click", (event) => {
    document.getElementById('id_form').style.backgroundColor = event.target.value;
    // esto nos devuelve una lista de nodos de los input radio
    let colores = document.getElementsByName("form-color");
    // vamos a recorrerlo para ver el color que esta checked
    for (let i = 0; i < colores.length; i++) {
      if (colores[i].checked == true) {
        console.log("Color elegido: " + colores[i].value)
      }
    }
  });
}

/*********************************************************************************************
*********************************************************************************************
     Resetear el formulario
*********************************************************************************************
*********************************************************************************************/

document.forms[0]['reset'].addEventListener("click", function () {
  alert("Empezamos de nuevo");
  document.getElementById("answers").innerHTML = "<h2>Respuestas</h2>";
  document.getElementById("id_input_text").focus();
});

/*********************************************************************************************
*********************************************************************************************
      Recoger, recorrer y mostrar el contenido del formulario
*********************************************************************************************
*********************************************************************************************/

document.forms[0].addEventListener("submit", (event) => {

  document.getElementById("answers").innerHTML = "<h2>Respuestas</h2>";

  for (let e of document.forms[0].elements) {

    let contentText = "";
    let container = document.createElement("p");

    switch (e.type) {
      case "checkbox":
        if (e.checked) contentText += `${e.name}: ${e.value}`;
        break;
      case "radio":
        if (e.checked) contentText += `${e.name}: ${e.value}`;
        break;
      case "color":
        if (e.value != "") contentText += `${e.name}: ${e.value}`;
        break;
      default:
        if (e.value != "" && e.type != "submit" && e.type != "reset") contentText += `${e.name}: ${e.value}`;
        break;
    }

    if (e.type == "color") container.style.color = `${e.value}`;

    if (contentText != "") {
      container.appendChild(document.createTextNode(contentText));
      document.getElementById("answers").appendChild(container);
    }
  }

  event.preventDefault();
})

/*********************************************************************************************
*********************************************************************************************
      Cambio dinámico del día preferente
*********************************************************************************************
*********************************************************************************************/

let dias = new Set();

for (let e of document.getElementsByClassName('day-available')) {

  e.addEventListener("click", (event) => {

    let diaMarcado = event.target.id.substring(9); // de id_check_monday coge monday y asi sucesivamente

    // si el Set contiene el dia lo borre del Set, sino añade el dia marcado
    if (dias.has(diaMarcado)) {
      dias.delete(diaMarcado);
    } else {
      dias.add(diaMarcado);
    }

    let selectDiaPreferente = document.forms[0].elements['id_select'];

    if (dias.size == 0) {
      selectDiaPreferente.innerHTML = '<option value="" selected disabled>Ningún elemento seleccionado</option>';
    } else {
      selectDiaPreferente.innerHTML = "";
    }

    let i = 0;

    for (d of dias) {
      let textday = "";
      switch (d) {
        case "monday":
          textday = "Lunes";
          break;
        case "tuesday":
          textday = "Martes";
          break;
        case "wednesday":
          textday = "Miércoles";
          break;
        case "thursday":
          textday = "Jueves";
          break;
        case "friday":
          textday = "Viernes";
          break;
        default:
          break;
      }

      let contentText = document.createTextNode(textday);
      let container = document.createElement("option");
      container.appendChild(contentText);
      container.value = d;

      if (i == dias.size - 1) {
        container.selected = true;
      }

      selectDiaPreferente.appendChild(container);
      i++;
    }
  });
}  