function enviar()
{
    let inputs= document.querySelectorAll("input[type=text]");
    let divisiones = document.querySelectorAll(".respuesta");
    console.log(inputs,divisiones);
    inputs.forEach((e,i)=> {
        if(e.value!='')
        {
            if(divisiones[i].getElementsByTagName('p').length===0)//No exista una respuestar pervia crea un parrafo
            {
                let parrafo = document.createElement('p');
                parrafo.innerHTML=e.value;
                divisiones[i].appendChild(parrafo);
                parrafo.className='azul';
                parrafo.previousElementSibling.className='verde';
            }
            else{
                divisiones[i].getElementsByTagName('p')[0].innerHTML=e.value;
            }
        }
        else{

            if(divisiones[i].getElementsByTagName("p").length!=0)
            {
                divisiones[i].getElementsByTagName("p")[0].remove();
                divisiones[i].firstElementChild.className='negro';
                // parrafo.previousElementSibling.className='negro';
            }
            else{
                console.log("No hay parrafo");
            }
        }
    })
}
            // divisiones[i].getElementsByTagName("p").length!=0 ? divisiones[i].getElementsByTagName("p")[0].remove() :console.log(`no hay parrafo`);
