numeroAlumnos();
function numeroAlumnos()
{
    let num= prompt("Introduce el número de alumnos: ");
    let nump = parseInt(num);
    alumnosNotas(nump);
}

function alumnosNotas(n)
{
    let alumnos = new Map();
    let n2=n;
    let cont=1;
    let total=0;
    while(n>0)
    {
        let nombre=prompt("Introduce nombre del alumno: ");
        let nota = prompt("Introduce nota del alumno: ");
        alumnos.set('nombre'+cont,nombre);
        alumnos.set('nota'+cont,parseInt(nota));
        n--;
        cont++;
        if(!isNaN(nota))
        {
            total+=parseInt(nota);
        }
        
       /* alumnos.forEach((value,key)=>
        {
            console.log(`${key}: ${value}`);
            if(!isNaN(value))
            {
                total+=value;
            }
        });*/
    }
    console.log("La media de los alumnos es: "+media(n2,total));
    for (let[key,value]of alumnos)
    {
        console.log(key +': '+value);
    }
}

function media(div,di)
{
    return di/div;
}