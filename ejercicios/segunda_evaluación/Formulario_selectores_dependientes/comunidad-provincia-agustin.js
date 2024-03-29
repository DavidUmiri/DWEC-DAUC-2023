let info = new Map();

info.set("Andalucia", ["Granada", "Almeria", "Cadiz"])
info.set("Madrid", ["Madrid Capital"])
info.set("Galicia", ["La Coruña", "Lugo", "Pontevedra", "Ourense"])
info.set("Cataluña", ["Girona", "Barcelona"])

// Obtenemos el formulario
let formulario = document.forms[0];

// Insercción de autonomías
info.forEach((v, k) => {
    let opcion = document.createElement("option");
    opcion.setAttribute("value", k)
    opcion.innerHTML = k
    formulario.elements['id_autonomia'].appendChild(opcion);
    //Asociar evento click [Firefox]
    // opcion.addEventListener("click", dibujarProvincias)
});

// Capturamos el evento, [chrome]
formulario.elements['id_autonomia'].addEventListener("click", dibujarProvincias)

function dibujarProvincias(e) {
    // Borrar provincias existentes 
    let opcionesExistentes = document.querySelectorAll("#id_provincia>option")
    opcionesExistentes.forEach(e => e.remove())
    // Añadir las nuevas provincias
    let provincias = info.get(e.target.value)
    for (const provincia of provincias) {
        let opcion = document.createElement("option");
        opcion.setAttribute("value", provincia)
        opcion.innerHTML = provincia
        formulario.elements['id_provincia'].appendChild(opcion);
    }
}

