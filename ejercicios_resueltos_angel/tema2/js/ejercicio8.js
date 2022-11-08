alert("Introducir un numero del cual se sacaran sus pares a partir del 2:");
let numeroUno=1;
let numeroDos=2;
for(let a=0; a<3; a++)
{
let n1=prompt("Introduce un número");
n1=parseInt(n1);
let resultado="";
let identificadorUno="c"+numeroUno;
let identificadorDos="c"+numeroDos;
for(let i=1; i<=n1; i++)
{
    if(i%2!=0)
    {
    console.log(i);
    resultado+=i+"<br>";
    document.getElementById(identificadorDos).innerHTML=resultado;
    } 
}
document.getElementById(identificadorUno).innerHTML=n1;
numeroUno+=2;
numeroDos+=2;
}