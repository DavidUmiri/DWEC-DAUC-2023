let identificador=0;
const letra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','S','Q',
'V','H','L','C','K','E'];
let letras="";
repetir();

function repetir()
{
   identificador= setInterval(solicitar,5000);
   console.log(identificador);
}

function solicitar()
{
    let dni = prompt("Introduce un dni:");
    let dniNumero=parseInt(dni);
    if(dniNumero===-1)
    {
        document.getElementById("p1").innerHTML="La letras de todos los DNI introducidos son:"+letras;
        clearInterval(identificador);
    }
    else{
        let resto=dniNumero%23;
        letras+=letra[resto]+" ";
        console.log(letras);
    }
}