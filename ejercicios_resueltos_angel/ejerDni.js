function comprobarDni()
{
const letra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','S','Q',
'V','H','L','C','K','E'];
let numero=parseInt(document.getElementById("dni").value);
let letraDni=document.getElementById("letra").value;
let letraM=letraDni.toUpperCase();
if(numero<0 || numero >99999999)
{
    document.getElementById("p1").innerHTML="El numero de dni introducido no es válido. ";
}
else{
    let resto=numero%23;
    if(letra[resto]===letraM)
    {
        document.getElementById("p1").innerHTML="El "+ document.getElementById("dni").value +" y la letra "+letraM+ " son correctos. ";
    }
    else{
        document.getElementById("p1").innerHTML="La letra introducida "+ letraM+ " no es correcta. ";
    }
}
}