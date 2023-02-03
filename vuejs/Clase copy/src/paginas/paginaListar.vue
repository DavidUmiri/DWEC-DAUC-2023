<script setup>
import { ref, reactive, onMounted } from 'vue'
import servicioDatosProducto from '../servicios/servicioDatosProducto.js';

// montado del componente --> cuando se cargue la pagina pregunte a los productos y me los dibuje
onMounted(() => {
    obtenerProductos()
});

let productos = ref(null)
let nombreProducto = ref(null)
// let idProducto = ref(null)

function obtenerProductos() {
    servicioDatosProducto.getAll()
        .then(response => {
            productos.value = response.data;
            console.log(response.data[0]);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

function buscarProducto() {
    servicioDatosProducto.findByNombre(nombreProducto.value)
        .then(response => {
            if (response.data !== []) {
                productos.value = response.data
            }
        })
        .catch(e => {
            console.log(e);
        })

}

function borrarProducto(producto) {
    servicioDatosProducto.delete(producto.id)
        .then(response => {
            // si funciona entra al if
            if (response.data !== []) {
                productos.value = response.data
                console.log(response.data);
            }
            obtenerProductos();
        })
        // si no funciona esto
        .catch(e => {
            console.log(e);
        })
}

// PDTE no acepta la solicitud
function borrarTodos() {
    servicioDatosProducto.deleteAll()
        .then(() => {
            console.log("Todos los productos han sido eliminados");
            obtenerProductos();
        })
        .catch(error => {
            console.log("Error al eliminar productos: ", error);
        });
}


// function crearProducto() {

//     let data = {}
//     data.id = document.forms[0].elements[0].value
//     data.nombre = document.forms[0].elements[1].value
//     data.fecha = document.forms[0].elements[2].value
//     data.descripcion = document.forms[0].elements[3].value

//     servicioDatosProducto.create(JSON.stringify(data))
//         .then(response => {
//             console.log("Ha insertado el elemento...")
//             obtenerProductos();
//         })
//         .catch(e => {
//             console.log("Error al insertar...")
//         })
// }

let productoObj = reactive({ id: null, nombre: null, fecha: null, descripcion: null })

function crearProducto() {
    servicioDatosProducto.create(JSON.stringify(productoObj)).then(response => {
        obtenerProductos();
        productoObj = ""; // PDTE lo ponemos a texto vacío
        console.log("Ha insertado el elemento...")
    }).catch(e => {
        console.log("Error al insertar...")
    });

}

function actualizarProducto() {
    let data = {}
    data.id = document.forms[0].elements[0].value
    data.nombre = document.forms[0].elements[1].value
    data.fecha = document.forms[0].elements[2].value
    data.descripcion = document.forms[0].elements[3].value

    servicioDatosProducto.update(data.id, JSON.stringify(data))
        .then(response => {
            if (response.data !== []) {
                productos.value = response.data
                console.log(response.data);
            }
            obtenerProductos();
        })
        .catch(e => {
            console.log(e);
        })
}



</script>

<template>

    <!-- <form @submit.prevent="crearProducto" action="" method="">
        <input type="number" placeholder="Id" name="id" v-model="productoObj.id" autofocus>
        <input type="text" placeholder="Nombre" name="nombre" v-model="productoObj.nombre">
        <input type="text" placeholder="Fecha" name="fecha" v-model="productoObj.fecha">
        <input type="text" placeholder="Descripcion" name="descripcion" v-model="productoObj.descripcion"><br>
        <input type="submit" value="Crear">
        <button type="button" @click="actualizarProducto">Actualizar</button>
    </form> -->
    <hr>

    <!-- <input id="idBuscar" type="text" placeholder="Producto a buscar" v-model="nombreProducto">
    <button type="button" @click="buscarProducto">Buscar</button>
    <br> -->

    <!-- <input type="number" placeholder="Id" v-model="idProducto"> -->
    <!-- <button type="button" @click="borrarProducto">Borrar</button> -->
    <!-- <button type="button" @click="borrarTodos">PDTE Borrar todos los productos</button> -->
    <br>

    <!-- PDTE placeholder object Object -->
    <!-- <input type="number" placeholder="Id" v-model="data.id">
    <input type="text" placeholder="Nombre" v-model="data.nombre">
    <input type="text" placeholder="Fecha" v-model="data.fecha">
    <input type="text" placeholder="Descripcion" v-model="data.descripcion">
    <button type="button" @click="crearProducto">Crear</button>
    <button type="button" @click="actualizarProducto">Actualizar</button>
    <hr> -->

    <ul>
        <li v-for="(producto, id) in productos" :key="id">
            {{ producto.id }}.
            {{ producto.nombre }}
            {{ producto.fecha }}
            {{ producto.descripcion }}
        </li>
    </ul>


    <!-- <table class="tabla" border="1px">
        <th id="th" colspan="4">Click al producto para eliminar</th>
        <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Fecha</th>
            <th>Descripción</th>
        </tr>
        <tr @click="borrarProducto(producto)" v-for="(producto, id) in productos" :key="id">
            <td>{{ producto.id }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.fecha }}</td>
            <td>{{ producto.descripcion }}</td>
        </tr>
    </table> -->


</template>

<style>
.tabla {
    background-color: lightcyan;
    text-align: center;
}

.tabla:hover {
    cursor: pointer;
}

#th {
    color: red;
}
</style>