// let numero_telefono = "95812456";
let numero_telefono = prompt("Introduce un número de teléfono");
// convertimos el número en un array
let array = numero_telefono.split("");
// hacemos un subarray de los tres primeros dígitos y lo convertimos a cadena
let tres_digitos = array.slice(0, 3).join("");

prefijos_conocidos(tres_digitos);

function prefijos_conocidos(prefijo) {
    if (prefijo === "958") {
        console.log("Granada");
    } else if (prefijo === "957") {
        console.log("Almería");
    } else if (prefijo === "956") {
        console.log("Jaén");
    } else if (prefijo === "955") {
        console.log("Córdoba");
    } else {
        console.log("Ese prefijo aún no lo conozco");
    }
}