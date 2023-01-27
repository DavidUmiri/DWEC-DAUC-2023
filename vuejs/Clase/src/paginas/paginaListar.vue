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
            // si me funciona el codigo esto
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

let data = {}
data.id = ref(null)
data.nombre = ref(null)
data.fecha = ref(null)
data.descripcion = ref(null)

function crearProducto() {
    servicioDatosProducto.create(
        JSON.stringify(data)
    )
        .then(response => {
            if (response.data !== []) {
                productos.value = response.data
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

    <input type="text" placeholder="Producto a buscar" v-model="nombreProducto" autofocus>
    <button type="button" @click="buscarProducto">Buscar</button>
    <br>
    <input type="number" placeholder="Id" v-model="idProducto">
    <button type="button" @click="borrarProducto">Borrar</button>
    <br>

    <!-- PDTE arreglar el fondo del input que se mete texto -->
    <input type="number" placeholder="Id" v-model="data.id">
    <input type="text" placeholder="Nombre" v-model="data.nombre">
    <input type="text" placeholder="Fecha" v-model="data.fecha">
    <input type="text" placeholder="Descripcion" v-model="data.descripcion">
    <button type="button" @click="crearProducto">Crear</button>


    <ul>
        <li v-for="(producto, id) in productos" :key="id">
            {{ producto.id }} -- {{ producto.nombre }} -- {{ producto.fecha }} -- {{ producto.descripcion }}
        </li>
    </ul>

    <table class="tabla" border="2px">
        <tr v-for="(producto, id) in productos" :key="id">
            <th>{{ producto.id }}</th>
            <th>{{ producto.nombre }}</th>
            <th>{{ producto.fecha }}</th>
            <th>{{ producto.descripcion }}</th>
        </tr>
    </table>


</template>

<style>
.tabla {
    padding: 15px;
}
</style>