
function buscar()
{
    let valor= document.getElementById("idText").value;
    let parrafo=document.getElementById("p1").innerHTML;
    let seleccionado=document.getElementById("palabras").checked;//devuelve true o false
    let seleccionado2 = document.getElementById("mayusMinus").checked;
    if(seleccionado || seleccionado2)
    {
       let comprobar=parrafo.includes(valor);
       if(seleccionado)
       {

       //palabras completas
       if(comprobar)
       {
        console.log("La "+ valor + " se ha encontrado");
        document.getElementById("resultado").innerHTML="La "+ valor+" se ha encontrado";

       }
       else{
        console.log("La "+ valor + " no se ha encontrado");
        document.getElementById("resultado").innerHTML="La "+ valor+" no se ha encontrado";
       }
    }
    //mayusculas minusculas
    else if(seleccionado2)
    {
        if(comprobar)
        {
         console.log("La "+ valor + " se ha encontrado");
         document.getElementById("resultado").innerHTML="La "+ valor+" se ha encontrado";
 
        }
        else{
         console.log("La "+ valor + " no se ha encontrado");
         document.getElementById("resultado").innerHTML="La "+ valor+" no se ha encontrado";
        }
    }
    }
    else{
        document.getElementById("resultado").innerHTML="Selecciona un opción";
    }

 
    // document.forms[0].idText.value;
}