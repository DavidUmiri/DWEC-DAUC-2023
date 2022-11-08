alert("Introduce el sueldo y la antiguedad de tres operarios: ")
for(let i=0; i<3; i++){
    let sueldo=prompt("Introduce sueldo");
    let años=prompt("Introduce antiguedad");
    sueldo=parseInt(sueldo);
    años=parseInt(años);
    let resultado=0;
    let datos=` `;
    if(sueldo<500 && años>=10){
        datos+=sueldo+"</br>"+ años;
        resultado=sueldo*3;
        console.log(` Sueldo triple : ${resultado}`);
        document.getElementById("c2").innerHTML=resultado;
        document.getElementById("c1").innerHTML=datos;
    }  
    else if(sueldo<500 && años<10) 
     {
        datos+=sueldo+"</br>"+ años;
        resultado=sueldo*2;
        console.log(` Sueldo doble : ${resultado}`);
        document.getElementById("c4").innerHTML=resultado;
        document.getElementById("c3").innerHTML=datos;
    }
    else if(sueldo>=500)
    {
        datos+=sueldo+"</br>"+ años;
        resultado=sueldo;
        console.log(` Sueldo sin cambios: ${resultado}`);
        document.getElementById("c6").innerHTML=resultado;
        document.getElementById("c5").innerHTML=datos;
    }
}

