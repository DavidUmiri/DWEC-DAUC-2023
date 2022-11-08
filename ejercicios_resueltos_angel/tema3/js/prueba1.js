let nombres = ["alvaro","valentin"];
nombres.length;
nombres.push("Alejandro");//añadir al ultimo
nombres.unshift("amado");//añadir al principio
nombres.shift();// quitar el primero
nombres.pop(); // quitar el último.

nombres = ["a","b","c","d"];
nombres.filter(i=>i=="a");// "a"

nombres = ["alvaro","valentin","agustin"];

nombres.filter(i=> i[0]=="A");//devuelve los que empiecen en A

nombres.filter(function(i)
{
    return i[0]=="A";
})


nombres.some(function(i)
{
    return i[0]=="A"
});


let nombresFiltrado = nombres.filter(function(i)
{
    return i[0]=="A"
})


nombres.map(function(i)
{
    return i+1
});
let edadDaw = [11,12,13,14,15];
edadDaw.map(i=> i+1);