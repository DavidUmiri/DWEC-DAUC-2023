alert("Introduce notas,para salir -1:");
let numero1=1;
let numero2=2;
for(let a=0;a<3;a++)
{
let nota=prompt("Introduce nota entre 0-10");
nota=parseInt(nota);
let posicion=0;
let datosIntroducidos="";
let mayor10=new Array();
let comprobar=false;
let identificadorUno="c"+numero1;
let identificadorDos="c"+numero2;
while(nota>-1)
{
    mayor10[posicion]=nota;
    datosIntroducidos+=nota+",";
    nota=prompt("Introduce nota:");
    nota=parseInt(nota);
    posicion++;
}
console.log(mayor10);
datosIntroducidos+=nota;
document.getElementById(identificadorUno).innerHTML=datosIntroducidos;
for(let i=0; i<mayor10.length;i++)
{
    if(mayor10[i]===10)
    {
        comprobar=true;
    }
}
if(comprobar)
{
    document.getElementById(identificadorDos).innerHTML="SI";
}
else{
    document.getElementById(identificadorDos).innerHTML="NO";
}
numero1+=2;
numero2+=2;
}