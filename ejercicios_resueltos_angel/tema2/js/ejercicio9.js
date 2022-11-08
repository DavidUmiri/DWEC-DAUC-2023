alert("pagina que hará la tabla de multiplicar (num1) hasta que se indique(num2)");
let numero1=1;
let numero2=2;
for(let a=0; a<3; a++)
{
let resultado="";
let num1=prompt("Introduce el primer valor: ");
num1=parseInt(num1);
let num2=prompt("Introduce el segundo valor: ");
num2=parseInt(num2);
while(!((num1>=-50 && num1<=50) && (num2>=1 && num2<=20)))
{
    if(!(num1>=-50 && num1<=50))
    {
    num1=prompt("Introduce el primer valor:valido entre -50 a 50");
    num1=parseInt(num1);
    }
    else if(!(num2>=1 && num2<=20))
    {
    num2=prompt("Introduce el segundo valor: valido entre 1 a 20");
    num2=parseInt(num2);
    }
}

let identificadorUno="c"+numero1;
let identificadorDos="c"+numero2;
document.getElementById(identificadorUno).innerHTML=num1+" "+num2;
for(let p1=1;p1<=num2; p1++ )
{
    let total=num1*p1;
    resultado+=num1+" X "+p1+" = "+total+"<br>";
    console.log(` ${num1} X ${p1}=${total}`);
    document.getElementById(identificadorDos).innerHTML=resultado;
}
numero1+=2;
numero2+=2;
}

