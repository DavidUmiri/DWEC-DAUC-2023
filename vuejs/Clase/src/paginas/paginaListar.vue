<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import servicioDatosProducto from '../servicios/servicioDatosProducto.js';

let productos = ref(null)
let nombreProducto = ref(null)
let productoActual = ref(null)

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

// montado del componente --> que cuando se cargue la pagina pregunte a los productos y me los dibuje
onMounted(() => {
    obtenerProductos()
});

</script>

<template>
    <input type="text" placeholder="Producto a buscar" v-model="nombreProducto">
    <button type="button" @click="buscarProducto">Buscar</button>
    <li v-for="(producto, id) in productos" :key="id">{{ producto.nombre }}</li>
</template>