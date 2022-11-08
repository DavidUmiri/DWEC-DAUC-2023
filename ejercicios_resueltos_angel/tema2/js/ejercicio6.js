alert("Introduce 3 calificaciones entre 0-10:")
for(let i=0; i<3; i++){
    let nota=prompt("Introduce calificacion");
    nota=parseFloat(nota);
    let datos=` `;
    let nota2=Math.round(nota);
    if(nota2===0 && nota2<3){
        datos="Muy deficiente";
        console.log(` ${datos} ${nota}`);
        document.getElementById("c2").innerHTML=datos;
        document.getElementById("c1").innerHTML=nota;
    }  
    else if(nota2===3 && nota2<5) 
     {
        datos="Insuficiente";
        console.log(` ${datos} ${nota}`);
        document.getElementById("c2").innerHTML=datos;
        document.getElementById("c1").innerHTML=nota;
    }
    else if(nota2===5 &&nota2<6)
    {
        datos="Bien";
        console.log(` ${datos} ${nota}`);
        document.getElementById("c4").innerHTML=datos;
        document.getElementById("c3").innerHTML=nota;
    }
    else if(nota2===6 && nota2<9)
    {
        datos="Notable";
        console.log(` ${datos} ${nota}`);
        document.getElementById("c4").innerHTML=datos;
        document.getElementById("c3").innerHTML=nota;
    }
    else if(nota2===9 && nota2<10)
    {
        datos="Sobresaliente";
        console.log(` ${datos} ${nota}`);
        document.getElementById("c6").innerHTML=datos;
        document.getElementById("c5").innerHTML=nota;
    }
}

