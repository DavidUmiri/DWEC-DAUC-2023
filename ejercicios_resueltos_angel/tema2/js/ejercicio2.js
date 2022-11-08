function concatenar()
{
    let nombre=prompt();
    let apellido=prompt();
    document.getElementById("d1").innerHTML="<p style='color:blue; font-weight:bold;text-shadow:2px 2px 2px yellow;'>"+  nombre+ " "+apellido+"</p>";

    // d1.innerHTML="<div><p>'apellido'</p></div>";

    console.log(`Nombre y apellidos:${nombre} ${apellido}`);
}

function sumar()
{
    let uno=prompt();
    uno=parseInt(uno);
    let dos=prompt();
    dos=parseInt(dos);
    let tres=prompt();
    tres =parseInt(tres);
    let total=uno+dos+tres;
    document.getElementById("d2").innerHTML="<p style='color:red; font-weight:bold;;'>"+total+ "</p>";
    console.log(`Suma total de ${uno}+${dos}+${tres}=${total}`);
}
function dividir()
{
    sumar();
}