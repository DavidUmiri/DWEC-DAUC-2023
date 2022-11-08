function perimetroRectangulo(a,b)
{
    let resultado=(a+b)*2;
    resultado=parseFloat(resultado);
    console.log(resultado);
}

//funciones anonimas
let perimetroRectangulo2=function (a,b)
{
    const resultado=(a+b)*2;
    return resultado;
}
//funcion lambda o flecha

let perimetroRectangulo3= (a,b) => (a+b)*2;

//funcion clasica

 function mayor(n1,n2)
 {
    if(n1>n2)
    {
        return true;
    }
    else{
        return false;
    }
 }
//funcion anonima
 let mayorAnonima=function(n1,n2){
    return (n1>n2)? "VERDADERO":"FALSO";
 }

 function mayor(n1,n2)
 {
    return(n1>n2) ? "VERDADERO": "FALSO";
 }
//funcion lambda
 const mayorlambda=(n1,n2)=> (n1,n2)?"VERDADERO":"FALSO";
