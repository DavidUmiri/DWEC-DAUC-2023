introducir();
function introducir()
{
    let narray;
    let nombres="";
    do{
        nombres=prompt("Introduce 10 nombres: ");
        narray= nombres.split(",");

    }while(narray.length>10);
    console.log(`Nombres introducidos: ${narray}`);
    console.log(`Numero de nombres: ${narray.length}`);
    console.log(`Nombres ordenados: ${narray.sort()}`);
    console.log(`Nombres ordenados a la inversa: ${narray.reverse()}`);
}