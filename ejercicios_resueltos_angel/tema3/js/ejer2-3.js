let identificador= 0;
empezar()
// function actualizar()
// {
//     let fecha=new Date();
//     let actual=fecha.toLocaleString();
//     document.title="La hora es "+actual;
// }
 

function empezar()
{
    identificador=setInterval(hora,1000);
    console.log(identificador);
}
function parar()
{
    clearInterval(identificador);
    console.log(`${identificador}`);
}


function hora()
{
    let today=new Date();
    let hora = today.getHours();
    let minutos = today.getMinutes();
    let segundos = today.getSeconds();
    let total = hora+ ": "+ ":"+ minutos+ ": "+ segundos;
    document.title=total;
}
