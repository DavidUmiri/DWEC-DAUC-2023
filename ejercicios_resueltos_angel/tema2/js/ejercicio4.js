alert("Introducir dia y mes.Indica si es el día de Navidad");
let n1=prompt("Introduce dia");
let n2=prompt("Introduce mes");
n1=parseInt(n1);
n2=parseInt(n2);
if(n1===25 && n2===12)
{
    console.log(`El ${n1} del ${n2} es el dia de Navidad`);
    document.getElementById("p1").innerHTML="El "+ n1+ " del "+ n2+" es el dia de Navidad";
}