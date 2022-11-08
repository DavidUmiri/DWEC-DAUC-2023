const limite=19;
let tablero = new Map();

dibujarTableroHTML();
generarTableroJS();
colocarBombasTableroJS();

function numeroAleatorio()
{
    return Math.ceil((limite-1)* Math.random())
}

function generarTableroJS()
{
    let n1=0;
    let n2=0;
    let iden="";
    for(let i=0; i<limite; i++)
    {
        iden="idCelda_"+n1+"_"+n2;
        tablero[i]= new Array(limite);
        for(let a =0; a<limite; a++)
        {
            document.getElementById(iden).innerHTML=0;
            tablero[i][a]=0;
            n2++;
            iden="idCelda_"+n1+"_"+n2;
        }
        n1++;
        n2=0;
    }
}

function colocarBombasTableroJS()
{
    let i=0;
   /* i<(limite*limite)/2*/
    while (i<=9)
    {
        let x = aleatorio();
        let y = aleatorio();
        if(tablero[x][y]===0)
        {
            tablero[x][y]=1;
            document.getElementById("idCelda_"+x+"_"+y).innerHTML="<span style='color:red;'>"+1+"</span>";
            i++;
        }
    }

}

function dibujarTableroHTML()
{
    let tabla = document.createElement("table");
    let tablero =document.getElementById("tab");
    tablero.appendChild(tabla);
    for(let i =0; i <limite; i++)
    {
        let fila= document.createElement("tr");
        
        for(let b =0; b<limite; b++)
        {
            let celda= document.createElement("td");
            celda.id=`idCelda_${i}_${b}`;
            fila.appendChild(celda);
        }
        fila.id=`fila_${i}`;
        tabla.appendChild(fila);
    }
}

calcularNumMinas(0,1);
function calcularNumMinas(x,y)
{
let contador=0;
for(let i=x-1; i<=x+1; i++)
{
    if(i>=0 && i<=9)
    {
        for(let b=y-1; b<=y+1; b++)
        {
            if(b>=0 && b<=9)
            {
                if(tablero[b][i]===1)
                {
                   contador++;
                }
            }
        }
    }
}
console.log(contador);

}