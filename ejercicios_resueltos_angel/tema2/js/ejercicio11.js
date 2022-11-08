alert("Introduce un numero.Realiza un triangulo con *");
let n1=prompt("Introduce el numero: ");
n1=parseInt(n1);
let resultado="";
let caracter="*";
for(let a=0; a<n1; a++)
{
    resultado+=caracter+"</br>";
    caracter+="*";
}
document.getElementById("d1").innerHTML="<p style='color:blue; font-weight:bold;text-shadow:2px 2px 2px yellow;'>"+  resultado+"</p>";
