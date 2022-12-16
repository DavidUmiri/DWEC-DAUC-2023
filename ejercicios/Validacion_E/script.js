// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.

document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario = document.forms["idFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación:
 *  - Mediante JS
 *  - Mediante Api de acceso a validación de html
 ****************************************************************/

function validar(e) {

    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName

    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error

    // IMPORTANTE!!! Deshabilitamos el botón


    if (validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")) {

        return true;

    } else {
        e.preventDefault();
        this.disabled = false;
        return false
    }
}

/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/

function validarJS(eventopordefecto) {

    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarMatricula();
}

/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre = formulario.elements["idNombre"]

    if (inputNombre.value == "") {
        formulario.elements["idNombre"].className = "error"; // la clase error --> te pone el input rojo
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML = "El campo " + formulario.elements["idNombre"].name + " no puede estar en blanco"

        return false
    }
    return true
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {

    let inputEdad = formulario.elements["idEdad"].value

    if (inputEdad < 18) {
        formulario.elements["idEdad"].className = "error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML = "El campo " + formulario.elements["idEdad"].name + " no puede ser menor de 18 años"
        return false
    } else if (inputEdad > 100) {
        formulario.elements["idEdad"].className = "error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML = "El campo " + formulario.elements["idEdad"].name + " sobrepasa la edad permitida"
        return false
    }
    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.
    return true;
}

/***************************************************************************/
/***************************************************************************/

function validarMatricula() { // NO FUNCIONA

    let inputMatricula = formulario.elements["idMatricula"].value

    let expresion_dni = /^\d{8}[a-zA-Z]$/; // 8 cifras numéricas + caracter alfabético
    let expresion_matricula = /^\d{4}[a-zA-Z]{3}$/; // 4 números 3 letras
    let expresion_matricula_europa = `(E)(\d{4})([A-Z]{3})`;
    let matricula_nueva = `(?i)^\d{4}?[ -]*([A-Z]{3})$`;

    if (inputMatricula == "") {

        formulario.elements["idMatricula"].className = "error";
        formulario.elements["idMatricula"].focus();
        document.getElementById('idMatriculaError').innerHTML = "El campo " + formulario.elements["idMatricula"].name + " no puede estar en blanco"
        return false

    } else if (inputMatricula != "") {

    }

    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares

    return true;
}

/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML(eventopordefecto) {

    return true;
}

