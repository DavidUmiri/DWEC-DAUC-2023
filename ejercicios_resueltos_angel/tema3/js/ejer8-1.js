menu();
function menu()
{
    let opc;
    do
    {
        let nuevo = prompt("Introduce una opcion: ");
        opc=parseInt(nuevo);
        switch(opc)
        {
            case 1:
                redondeoSuperior();
                break;
            case 2:
                redondeoInferior();
                break;
            case 3:
                redondeo();
                break;
            case 4:
                maximo();
                break;
            case 5:
                minimo();
                break;
            case 6:
                potencia();
                break;
            case 7:
                raiz();
                break;
            default:
                console.log("Has salido del programa.");
        }
    }while(opc<=7);
}

function redondeoSuperior()
{
    let entrada= prompt("Introduce un numero:");
    let numero = parseFloat(entrada);
    document.getElementById("l1").innerHTML=Math.ceil(numero);
    console.log(Math.ceil(numero));
}

function redondeoInferior()
{
    let entrada = prompt("Introduce un numero: ");
    let numero = parseFloat(entrada);
    document.getElementById("l2").innerHTML=Math.floor(numero);
    console.log(Math.floor(numero));
}

function redondeo()
{
    let entrada = prompt("Introduce un numero: ");
    let numero = parseFloat(entrada);
    document.getElementById("l3").innerHTML=Math.round(numero);
    console.log(Math.round(numero));
}

function maximo()
{
    let numeros = prompt("Introduce dos numeros: ");
    let numArray=numeros.split(" ");
    if(numArray[0]>numArray[1])
    {
        console.log(`El ${numArray[0]} es mayor que ${numArray[1]}`);
    }
    else if(numArray[1]>numArray[0])
    {
        console.log(`El ${numArray[1]} es mayor que ${numArray[0]}`);

    }
    else{
        console.log(`El ${numArray[0]} son iguales ${numArray[1]}`);
    }
}

function maximo()
{
    let numeros = prompt("Introduce dos numeros: ");
    let numArray=numeros.split(" ");
    if(numArray[0]>numArray[1])
    {
        console.log(`El ${numArray[0]} es mayor que ${numArray[1]}`);
    }
    else if(numArray[1]>numArray[0])
    {
        console.log(`El ${numArray[1]} es mayor que ${numArray[0]}`);

    }
    else{
        console.log(`El ${numArray[0]} son iguales ${numArray[1]}`);
    }
}


function minimo()
{
    let numero = prompt("Introduce dos numeros: ");
    let numArray=numero.split(" ");
    if(numArray[0]>numArray[1])
    {
        console.log(`El ${numArray[1]} es menor que ${numArray[0]}`);
    }
    else if(numArray[1]>numArray[0])
    {
        console.log(`El ${numArray[0]} es menor que ${numArray[1]}`);

    }
    else{
        console.log(`El ${numArray[0]} son iguales ${numArray[1]}`);
    }
}

function potencia()
{
    let numero =prompt("Introduce dos numeros:(n1 elevado a n2) ");
    let numArray=numero.split(" ");
    let potencia= numArray[0]**numArray[1];
    console.log(`Potencia: ${potencia}`);
}

function raiz()
{
    let numero= prompt("Introduce un numero para calcular su raiz cuadrada:");
    console.log(Math.sqrt(parseInt(numero)));
}