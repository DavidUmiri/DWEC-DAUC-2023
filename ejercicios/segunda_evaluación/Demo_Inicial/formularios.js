let color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

document.getElementById("idEnviar").addEventListener("click", mostrarInformacion)


function mostrarInformacion(e) {

    console.clear()
    console.log(`Usando this : %c${this.value}`, color_css);
    console.log(`Usando Event : %c${e.target.value}`, color_css);
    // e.preventDefault();
    // let formulario = document.forms("idFormulario").elements["idLista"];

    // nombre
    let valorNombre = document.getElementById("idNombre").value;
    console.log(`Nombre: %c${valorNombre}`, color_css);

    // radio
    let elementos = document.getElementsByName("radio");
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            console.log(`Radio: %c${elementos[i].value}`, color_css);
        }
    }

    // checkbox
    let condiciones = document.getElementById("idCondiciones");
    if (condiciones.checked) {
        console.log(`Checkbox: %c${condiciones.value}`, color_css);
    }

    // select
    let lista = formulario.elements["idLista"];
    let idxSeleccionado = lista.selectedIndex;
    let opcionSeleccionada = lista.options[idxSeleccionado];

    // document.forms["idFormulario"].elements["idLista"].selectedIndex 



}


