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

function borrarIndice()
{
    let elemento = prompt("Introduce el nombre a borrar:");
    let posicion = nombres.findIndex(e=> e===elemento);
    if(posicion>=0)
    {
        for( posicion<nombres.length-1;posicion++;)
        {
            nombres[posicion]=nombres[posicion+1];
        }
        nombres.length=nombres.length-1;
        console.log(`El array de nombres queda asi${nombres}`);
    }
    else{
        alert("No se ha encontrado "+elemento);
    }
}


function borrarContenido()
{
    let elemento = prompt("Introduce el nombre a borrar: ");
    let nuevo=nombres.filter(i=> i!=elemento);//devuelve los que no sean elemento
    if(nuevo.length===nombres.length)
    {
        document.getElementById("p6").innerHTML="No se ha encontrado" +elemento + "para borrar.";
    }
    else{
        document.getElementById("p6").innerHTML="Se ha eliminado "+elemento;
    }
}