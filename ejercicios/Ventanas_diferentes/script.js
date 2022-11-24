let numero_socios = parseInt(prompt("Numero de socios"));

function abrir_ventana() {
    for (let i = 0; i < numero_socios; i++) {
        let nueva_ventana = window.open("", "", "width=500,height=500");
        let formulario = document.getElementsByName("formulario");
        nueva_ventana.document.write(formulario[0].innerHTML);
    }
}

// ¿Cómo mandamos la función correo a las ventanas hijas?
function es_correo() {
    let email = document.getElementById("email").value;
    if (email.indexOf("@") === -1) {
        console.log("No es un correo");
    } else {
        console.log("Es un correo");
    }
}