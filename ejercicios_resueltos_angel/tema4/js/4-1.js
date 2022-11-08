
function mostrar()
{
    let hijos=document.getElementById("contenedor").children;
    let resultado = document.getElementById("prueba");

    resultado.innerHTML="<br></br>El numero de hijos es: "+ hijos.length;

    for(let i = 0; i<hijos.length; i++)
    {
        resultado.innerHTML+="<br/>"+hijos[i].innerHTML;
    }
}