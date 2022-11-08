
let identificador=setTimeout(fecha,20000);
function fecha ()
{
    let fecha=new Date();
    document.write(fecha);
    console.log(identificador);
    clearTimeout(identificador);
}
