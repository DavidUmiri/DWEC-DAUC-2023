<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import servicioDatosProducto from '../servicios/servicioDatosProducto.js';

let productos = ref(null)
let nombreProducto = ref(null)
let idProducto = ref(null)

function obtenerProductos() {
    servicioDatosProducto.getAll()
        .then(response => {
            productos.value = response.data;
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

function borrarProducto() {
    servicioDatosProducto.delete(idProducto.value)
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

let data = {}
data.id = ref(null)
data.nombre = ref(null)
data.fecha = ref(null)
data.descripcion = ref(null)

function crearProducto() {

    // let data = {}
    // data.id = document.forms[0].elements[0].value
    // data.nombre = document.forms[0].elements[0].value
    // data.fecha = document.forms[0].elements[0].value
    // data.descripcion = document.forms[0].elements[0].value

    servicioDatosProducto.create(JSON.stringify(data))
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

function actualizarProducto() {
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
// montado del componente --> 
// que cuando se cargue la pagina pregunte a los productos y me los dibuje
onMounted(() => {
    obtenerProductos()
});

</script>

<template>

    <!--  -->
    <form action="" method="post">
        <input type="number" placeholder="Id" name="id">
        <input type="text" placeholder="Nombre" name="nombre">
        <input type="text" placeholder="Fecha" name="fecha">
        <input type="text" placeholder="Descripcion" name="descripcion">
        <input type="submit" value="Crear">
    </form>
    <hr>

    <!--  -->
    <input id="idBuscar" type="text" placeholder="Producto a buscar" v-model="nombreProducto" autofocus>
    <button type="button" @click="buscarProducto">Buscar</button>
    <br>
    <input type="number" placeholder="Id" v-model="idProducto">
    <button type="button" @click="borrarProducto">Borrar</button>
    <button type="button" @click="borrarTodos">PDTE Borrar todos los productos</button>
    <br>

    <!-- PDTE placeholder object Object -->
    <input type="number" placeholder="Id" v-model="data.id">
    <input type="text" placeholder="Nombre" v-model="data.nombre">
    <input type="text" placeholder="Fecha" v-model="data.fecha">
    <input type="text" placeholder="Descripcion" v-model="data.descripcion">
    <button type="button" @click="crearProducto">Crear</button>
    <button type="button" @click="actualizarProducto">Actualizar</button>
    <hr>
    <ul>
        <li v-for="(producto, id) in productos" :key="id">
            <!-- {{ producto.id }} || -->
            {{ producto.nombre }}
            <!-- {{ producto.fecha }} || -->
            <!-- {{ producto.descripcion }} -->
        </li>
    </ul>

    <!--  -->
    <table class="tabla" border="1px">
        <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Fecha</th>
            <th>Descripción</th>
        </tr>
        <tr v-for="(producto, id) in productos" :key="id">
            <td>{{ producto.id }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.fecha }}</td>
            <td>{{ producto.descripcion }}</td>
        </tr>
    </table>


</template>

<style>
.tabla {
    background-color: lightcyan;
    text-align: center;
}
</style>