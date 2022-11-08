let nombres=[];
let edades=[];
introducir();
function introducir()
{
    let i =0;
    while(i<6)
    {
        let nom= prompt("Introduce nombre: ");
        let edad= prompt("Introduce edad: ");
        nombres[i]=nom;
        edades[i]=parseInt(edad);
        i++;
    }
}

function mostrar()
{
    let cadena="";
    let cadenaEdad="";
    nombres.forEach(function(numero)
    {
        cadena+=numero+" ";
    })
    edades.forEach(function(edad)
    {
        cadenaEdad+=edad+" ";
    })
    document.getElementById("p1").innerHTML=cadena;
    document.getElementById("p2").innerHTML=cadenaEdad;
}
function media()
{
    let total=0;
    edades.forEach(function(t)
    {
        total+=t;
    })
    let media = total/edades.length;
    document.getElementById("p3").innerHTML=media;
}

function buscar()
{
    let buscado= prompt("Introduce el nombre a buscar: ");
    let posicion = nombres.findIndex(elemento=>elemento===buscado);
    if(posicion>=0)
    {
        document.getElementById("p4").innerHTML="La edad de "+buscado+" es "+edades[posicion];
    }
    else{
        alert("No se ha encontrado a "+buscado);
    }

}