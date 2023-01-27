<script setup>
import { onMounted } from 'vue';
import servicioDatosProducto from '../servicios/servicioDatosProducto.js';
import { ref } from "vue";

// *********************************************************************

import { RouterLink } from 'vue-router';

const props = defineProps({
    "titulo": String,
    "links": Array,
})

// *********************************************************************
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
    <span>{{ props.titulo }}</span>
    <nav>
        <RouterLink v-for="enlace in props.links" :key="enlace" :to="{ name: enlace }">
            {{ enlace }} ---
        </RouterLink>
    </nav>

    <!-- *************************************************************** -->
    <input type="text" placeholder="Producto a buscar" v-model="nombreProducto">
    <button type="button" @click="buscarProducto">Buscar</button>
    <li v-for="(producto, id) in productos" :key="id">{{ producto.nombre }}</li>
</template>

<style scoped>

</style>



