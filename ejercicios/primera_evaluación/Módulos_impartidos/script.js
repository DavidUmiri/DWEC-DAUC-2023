// declaramos el Map
let modulos_impartidos = new Map();
// insertamos los diferentes modulos en el Map
modulos_impartidos.set("DWES", "Desarrollo de Aplicaciones Web en Entorno Servidor");
modulos_impartidos.set("DWEC", "Desarrollo de Aplicaciones Web en Entorno Cliente");
modulos_impartidos.set("DIW", "Diseño de Interfaces Web");
modulos_impartidos.set("DAW", "Despliegue de Aplicaciones Web");
modulos_impartidos.set("E+", "Empresa e iniciativa emprendedora");
modulos_impartidos.set("I", "Inglés");
console.log("*****************************************");
// mostramos cuantos modulos hay almacenados
console.log(`TOTAL MODULOS: ${modulos_impartidos.size}`);
// mostramos el contenido
console.log("MOSTRAMOS EL CONTENIDO DE NUESTO MAPA CON forEach");
modulos_impartidos.forEach((valor) => console.log(valor));
console.log("*****************************************");
// mostramos las abreviaturas
console.log("MOSTRAMOS LAS ABREVIATURAS CON forEach");
modulos_impartidos.forEach((valor, clave) => console.log(clave));
console.log("*****************************************");
// mostramos el contenido con for of
console.log("MOSTRAMOS EL CONTENIDO CON for of");
for (let [, valor] of modulos_impartidos) {
    console.log(valor);
}
console.log("*****************************************");
console.log("MOSTRAMOS LAS ABREVIATURAS CON for of");
for (let [clave] of modulos_impartidos) {
    console.log(clave);
}
console.log("*****************************************");
// consultamos si está el módulo DAW
console.log("CONSULTAMOS SI EL MÓDULO DAW ESTÁ CON .has(clave)");
console.log(modulos_impartidos.has("DAW"));
console.log("*****************************************");
// si el módulo DAW está, lo eliminamos con .delete(clave)
if (modulos_impartidos.has("DAW") == true) {
    console.log("Vamos a borrar el módulo DAW con .delete(clave)");
    modulos_impartidos.delete("DAW");
}
// comprobamos que lo hemos borrado
console.log(modulos_impartidos.get("DAW"));
console.log("*****************************************");
// mostramos las clave y los valores
console.log("for of(CLAVE, VALOR)");
for (let [clave, valor] of modulos_impartidos.entries()) {
    console.log(`Clave: ${clave}\nValor: ${valor}`);
}
console.log("*****************************************");
// mostramos los valores y las claves
console.log("forEach(VALOR, CLAVE)");
modulos_impartidos.forEach((valor, clave, mapa) => console.log(`Valor:${valor}\nClave:${clave}`));
