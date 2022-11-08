alert("Introducir un numero del cual se sacaran sus pares a partir del 2:");
let numeroUno=1;
let numeroDos=2;
for(let a=0;a<3; a++)
{
let resultado="";    
let entrada=prompt("Introduce un número: ");
entrada=parseInt(entrada);
let identificadorUno="c"+numeroUno;
let identificadorDos="c"+numeroDos;
for(let i=2; i<=entrada;i++)
{
    if(i%2===0)
    {
        console.log(i);
        resultado+=i+"</br>";
        document.getElementById(identificadorDos).innerHTML=resultado;
    }
}
document.getElementById(identificadorUno).innerHTML=entrada;
numeroUno+=2;
numeroDos+=2;
}