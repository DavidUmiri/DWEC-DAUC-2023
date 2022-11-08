
/*const elementos = new Set();

cargarElementos()

function anadirElemento() {
    // Comprobar elemento repetido o vacrío
    let articulo = document.querySelector("#articulo");    
    if(articulo.value=="" || elementos.has(articulo.value)){
       alert(`Error, elemento incorrecto`)
       return false 
    }

    // Creamos el nodo de la lista    
    let lista = document.querySelector("#lista");
    let items = document.getElementsByTagName("li");

    item = document.createElement("li");
    texto = document.createTextNode(articulo.value);
    item.appendChild(texto);

    let insertado=false
    // Buscar e inserta en posiciones intermedias
    for ( let li of items) {
        result = articulo.value.localeCompare(li.innerHTML)
        
        if ( !insertado && articulo.value.localeCompare(li.innerHTML) < 0) {
            //console.log(`${articulo.value} - ${li.innerHTML} - ${result}`)
            lista.insertBefore(item, li);
            insertado=true            
        } 
    }
    // Buscar e insert en posición final
    if(insertado===false){
        lista.appendChild(item)
    }

    //Actualizo la lista de elementos
    elementos.add(item.innerHTML)
    articulo.value=""
}

function cargarElementos(){
    let items = document.querySelectorAll("#lista li");

    items.forEach( e => elementos.add(e.innerHTML) )    
}
*/







function anadirElemento() {
    let lista = [];
    let elementos_li = document.querySelectorAll("ul li");
    let elementos_ul = document.querySelector("ul");
    let valorInput = document.getElementById("articulo").value;

    elementos_li.forEach(e => lista.push(e.innerHTML));
    console.log(`${lista}`);

    if (lista.includes(valorInput) || valorInput === "") {

        elementos_li.forEach(e => {
            if (e.innerHTML === valorInput) {
                e.className = 'repetido';
            }
        })


    }
    else {
        lista.push(valorInput);
        let array1 = lista.sort();
        console.log(`${lista}`);

        elementos_li.forEach(e => e.remove());
        lista.forEach(e => {
            let nuevo = document.createElement('li');
            nuevo.innerHTML = e;
            nuevo.setAttribute("onClick", "borrarElemento(this)");
            elementos_ul.appendChild(nuevo);
        })
    }
}

function borrarElemento(element) {
    if (confirm("¿Desea borrar el elemento?"))
        element.remove();
}




