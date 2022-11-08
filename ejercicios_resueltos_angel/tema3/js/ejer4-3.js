// CON ARRAY
// let nombres=[];
// let edades=[];
// introducir();
// function introducir()
// {
//     let i =0;
//     while(i<6)
//     {
//         let nom= prompt("Introduce nombre: ");
//         let edad= prompt("Introduce edad: ");
//         nombres[i]=nom;
//         edades[i]=parseInt(edad);
//         i++;
//     }
// }

// function mostrar()
// {
//     let cadena="";
//     let cadenaEdad="";
//     nombres.forEach(function(numero)
//     {
//         cadena+=numero+" ";
//     })
//     edades.forEach(function(edad)
//     {
//         cadenaEdad+=edad+" ";
//     })
//     document.getElementById("p1").innerHTML=cadena;
//     document.getElementById("p2").innerHTML=cadenaEdad;
// }
// function media()
// {
//     let total=0;
//     edades.forEach(function(t)
//     {
//         total+=t;
//     })
//     let media = total/edades.length;
//     document.getElementById("p3").innerHTML=media;
// }




//CON SET
// let nombres =new Set();
// let edades = [];
// introducir();
// function introducir()
// {

// for(let i=0; i<6; i++)
// {
//     let dupla= prompt("introduce (nombre,edad)").split(",");
//     nombres.add(dupla[0]);
//     edades.push(parseInt(dupla[1]));
// }
// console.log(`${nombres}`);
// console.log(`${edades}`);
// }


// function mostrar()
// {
//     nombres.forEach(i=> console.log(i));
//     edades.forEach(i=> console.log(i));
// }


// function media()
// {
//     let total=0;
//     edades.forEach(i=> total+=i);
//     console.log("Media notas = "+total/edades.length);
// }

//Borrar por valor con SET
//  let nombreBorrar = prompt("Introduce el nombre");
//  if(nombres.has(nombreBorrar)) //si contiene nombreborrar es verdadero
//  {
//     nombres.delete(nombreBorrar);//entra en el if y borrar el valor.No hace falta decirle una posición
//     console.log(nombres);
//  }

// nombres.forEach(i=> console.log(i));

// en nom se almacena uno a uno el valor de nombres
// for(let nom of nombres.values())
// {
//     console.log(nom);
// }


// CON MAP
let informacion = new Map();
let dupla="";
introducir();
function introducir()
{

    for(let i=0; i<6; i++)
    {
        dupla= prompt("introduce (nombre,edad)").split(",");
        if(dupla.length===2)
        {
            informacion.set(dupla[0],dupla[1]);//meter informacion de 
        }
    }
    
}

function mostrar()
{
    for (let[key,value]of informacion.entries())
    {
        console.log(`Nombre->${key}: ${value}`);
    }
}
function media()
{
    let total=0;
    for(let [n,i]of informacion.entries())
    {
        total+=i;
    }
    let media = total
}