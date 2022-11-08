// aleatorio(10);
// function aleatorio(limite)
// {
//     document.getElementById("p1").innerHTML=parseInt(limite* Math.random())+1;
// }


generarTablero();

//let tablero = limite* limite


// for(let i = 0; i<10; i++)
// {
//     for(let a=0; a<10; a++)
//     {
//         tabla[i][a]=a;
//     }
// }
// console.log(tabla);


//Solución

const numero = prompt("introduce el tamaño del tablero");

function generarTablero()
{
let longitud = prompt("Introduce el tamaño del tablero: ");
let tablero = [];
let limite=parseInt(longitud);

for(let i = 0; i <limite; i++)
{
    tablero[i] = new Array(limite);
    for(let a = 0; a<limite; a++)
    {
        tablero[i][a]=0;
    }
}
console.log(tablero);
}

function aleatorio()
{

}