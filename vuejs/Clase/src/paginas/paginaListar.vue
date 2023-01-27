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
        })
        // si no funciona esto
        .catch(e => {
            console.log(e);
        })
}

let nuevoProducto = ref(null)
let nuevoId = ref(null)
let nuevoFecha = ref(null)
let nuevoDescripcion = ref(null)

function crearProducto() {
    servicioDatosProducto.create()
        .then(response => {
            if (response.data !== []) {
                productos.value = response.data
            }
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

    <input type="text" placeholder="Producto nuevo" v-model="nuevoProducto">
    <input type="number" placeholder="Id nuevo" v-model="nuevoId">
    <input type="text" placeholder="Fecha nueva" v-model="nuevoFecha">
    <input type="text" placeholder="Descripcion nueva" v-model="nuevoDescripcion">
    <button type="button" @click="crearProducto">Crear</button>


    <ul>
        <li v-for="(producto, id) in productos" :key="id">
            {{ producto.id }}. {{ producto.nombre }}
        </li>
    </ul>



</template>