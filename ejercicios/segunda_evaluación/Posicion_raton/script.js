
// clientX, clientY, devuelve las coordenadas X e Y
// mouseover, mouseover

function mostrarPosicion(evento) {
    document.getElementById("idInfoX").innerHTML = evento.clientX
    document.getElementById("idInfoY").innerHTML = evento.clientY
}

// asignamos un manejador a onmousemove/onmouseover
document.addEventListener("mousemove", mostrarPosicion)