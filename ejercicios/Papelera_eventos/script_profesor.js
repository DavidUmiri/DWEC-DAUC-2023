let papelera = document.getElementById("idPapelera")
let bola = document.getElementById("idBola")

function soltar(evento) {
    this.setAttribute("src", "papeleraLLena.jpg")
    bola.setAttribute("src", "");
}

papelera.addEventListener("dragover", (e) => { console.log("hola"); e.preventDefault() })
papelera.addEventListener("drop", soltar)





