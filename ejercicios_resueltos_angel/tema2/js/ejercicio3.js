alert("Introducir tres números y cual es mayor que 10");
let num1=prompt("Introduce un numero");
let num2 = prompt("Introduce un numero");
let num3 = prompt("Introduce un numero");

num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
for(let a=0; a<3; a++)
{
    if(num1>10)
    {
        console.log(` ${num1} es mayor que 10`);
        document.getElementById("uno").innerHTML=num1+" es mayor que 10";
        num1=0;
    }
    else if(num2>10)
    {
        console.log(`${num2} es mayor que 10`);
        document.getElementById("dos").innerHTML="<p style='color:red; font-size:20px;'>"+num2+" es mayor que 10"+"</p>";
        num2=0;
    }
    else if(num3>10){
        console.log(`${num3} es mayor  que 10`);
        document.getElementById("tres").innerHTML="<p style='text-shadow:2px 2px 2px black; color:red;'>"+num3+" es mayor que 10"+"</p>";
        num3=0;
    }

}