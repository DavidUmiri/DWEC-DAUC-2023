// método para la clase String que indica si la cadena se corresponde con un nif para españoles válido o no. 8 cifras y letra mayúscula

String.prototype.isNif = function () {
  return (
    /^(\d{8})([A-HJ-NP-TV-Z])$/.test(this) &&
    "TRWAGMYFPDXBNJZSQVHLCKE"[RegExp.$1 % 23] == RegExp.$2
  );
};

// ejemplo de uso
// alert("12341234H".isNif()); // devolverá false
// alert("00000000T".isNif()); // devolverá true

let repetir = setInterval(alert("Introduce el DNI", 20000));
let fin = -1;
