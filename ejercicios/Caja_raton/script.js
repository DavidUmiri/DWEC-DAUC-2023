// id="body"
// id="idCaja" name="caja"

let coorX = 0
let coorY = 0
// let altura = window.screen.height // -300
// let anchura = window.screen.width // -200
let anchura = document.body.scrollWidth - 500

document.addEventListener("keydown", (e) => {

    let caja = document.getElementById("idCaja")
    let desp = 10

    switch (e.key) {

        case '4':
        case 'ArrowLeft':
            coorX = (coorX - desp) < 0 ? coorX : coorX - desp
            caja.style.left = `${coorX}px`
            break
        case '6':
        case 'ArrowRight':
            coorX = (coorX + desp) > anchura ? coorX : coorX + desp
            caja.style.left = `${coorX}px`
            break
        case '8':
        case 'ArrowUp':
            coorY = (coorY - desp) < 0 ? coorY : coorY - desp
            caja.style.top = `${coorY}px`
            break
        case '22':
        case 'ArrowDown':
            coorY = (coorY + desp) > anchura ? coorY : coorY + desp
            caja.style.top = `${coorY}px`
            break

    }
})