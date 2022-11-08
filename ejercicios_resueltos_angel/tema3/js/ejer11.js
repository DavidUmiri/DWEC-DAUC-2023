let mapa = new Map();
mapa.set("DWECL","Desarrollo Web en Entorno Cliente");
mapa.set("DIW","Diseño de Interfaces Web");
mapa.set("DWES","Desarrollo Web Entorno Cliente");
mapa.set("DAW","Despliegue de Aplicaciones Web");
console.log(mapa.size);

// let mapa2 = [
//     {key:"DWel",value:"DES"},
//     {key:"DWES"}
// ];
// mostrarContenido()
mostrarContenido2();
clave();
valor();
comprobar();
function mostrarContenido()
{
    mapa.forEach((value,key)=>//el motivo del  orden es porque si solo metes una variable
    //te saca valor si metes otra te lee valor y clave.
    {
        console.log(`${key}: ${value}`);
    })
}

function mostrarContenido2()
{
    for(let [clave,valor] of mapa)
    {
        console.log(`${clave} : ${valor}`);
    }
}

function clave()
{
   for(let clave of mapa.keys())
   {
    console.log(clave);
   }
}

function valor()
{
    for(let valor of mapa.values())
    {
        console.log(valor);
    }
}

function comprobar()
{
    if(mapa.has("DAW"))
    {
        mapa.delete("DAW");
        console.log(`Se ha eliminado DAW`);
        console.log(mostrarContenido());
    }
    else{
        console.log(`No existe DAW`);
    }

}