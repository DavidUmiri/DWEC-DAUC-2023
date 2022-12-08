let zFondos150 = ["img/150x150/coche-1.jpg", "img/150x150/coche-2.jpg", "img/150x150/coche-3.jpg", "img/150x150/coche-4.jpg"]
let zFondos600 = ["img/600x400/coche-1.jpg", "img/600x400/coche-2.jpg", "img/600x400/coche-3.jpg", "img/600x400/coche-4.jpg"]

let imagenPrincipal = document.querySelector(".imagen-principal")
let subImagenes = document.querySelectorAll('[class *= "subImagen-"]')

let contador = 0
for (coche of zFondos150) {
    console.log(coche);
    // subimagenes
    let nuevo_img = document.createElement("img")
    nuevo_img.setAttribute("src", coche)
    subImagenes[contador].appendChild(nuevo_img)
    contador++
}

let nuevo_img = document.createElement("img")
nuevo_img.setAttribute("src", zFondos600[3])
nuevo_img.style.width = "100%"
imagenPrincipal.appendChild(nuevo_img)

