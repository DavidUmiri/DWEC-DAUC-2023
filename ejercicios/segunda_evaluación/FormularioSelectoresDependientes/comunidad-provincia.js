let map = new Map();

map.set("Andalucia", ["Granada", "Almeria", "Cadiz"]);
map.set("Madrid", ["Madrid Capital"]);
map.set("Galicia", ["La Coruña", "Lugo", "Orense", "Pontevedra"]);
map.set("Cataluña", ["Barcelona", "Girona"]);

// cogemos el formulario
let formulario = document.forms[0]

// insercion de elementos por defecto, ningun elemento seleccionado
for (e of formulario.getElementsByTagName("select")) {
    e.innerHTML = `<option selected value="" hidden class="defaultMessage">Ningún elemento seleccionado</option>`
}

// insercion de autonomias
map.forEach((valor, clave) => {
    let opcion = document.createElement("option")
    opcion.setAttribute("value", clave)
    opcion.innerHTML = clave
    formulario.elements["id_autonomia"].appendChild(opcion)

    // asociar el evento click --> FIREFOX
    // opcion.addEventListener("click", dibujarProvincias)
});

// el evento va asociado al click, event.target.value?
// capturamos el evento pero nos lo duplica --> GOOGLE CHROME
formulario.elements["id_autonomia"].addEventListener("click", dibujarProvincias)

function dibujarProvincias(e) {
    // console.log("funciona...");
    // console.log(e.target.value);
    // buscar algo para que no cargue dos veces el elemento
    // console.log(this.value);
    // console.log(map.get(this.value));

    // borrar provincias existentes
    // seleccionamos todas las opciones y las borramos
    let opcionesExistentes = document.querySelectorAll("#id_provincia>option")
    opcionesExistentes.forEach(e => e.remove())

    // añadir provincias
    let provincias = map.get(this.value)
    // let provincias = map.get(e.target.value)

    // FIXME: provincias --> da error de iteración en la consola
    for (const provincia of provincias) {
        // console.log(provincia);
        let opcion = document.createElement("option")
        opcion.setAttribute("value", provincia)
        opcion.innerHTML = provincia
        formulario.elements["id_provincia"].appendChild(opcion)
    }

}

// validacion
// API HTML --> requerido
// JS Tradicional --> Provincia vs Comunidad
document.getElementById("id_submit").addEventListener('click', validarAPIHTML);

function validarAPIHTML(eventopordefecto) {
    return validarAutonomiaHTML() && validarProvinciaHTML();
}

function validarAutonomiaHTML() {
    let inputAutonomia = formulario.elements["id_autonomia"]

    if (inputAutonomia.validity.valueMissing) {
        inputAutonomia.className = "error";
        inputAutonomia.focus();
        // inputAutonomia.setCustomValidity("El campo no puede estar en blanco");
        // document.getElementById('idAutonomiaError').innerHTML = inputAutonomia.validationMessage;
        // alert(inputAutonomia.validationMessage)

        return false;
    }

    return true;
}

function validarProvinciaHTML() {
    let inputProvincia = formulario.elements["id_provincia"]
    let opcionesExistentes = document.querySelectorAll("#id_provincia>option ")

    // opcionesExistentes.forEach(e => console.log(e))
    opcionesExistentes.forEach(e => {
        if (e.value == inputProvincia) {
            console.log("La provincia " + inputProvincia + " es igual a " + e.value);
            return true;
        }
        return false;
    })

}