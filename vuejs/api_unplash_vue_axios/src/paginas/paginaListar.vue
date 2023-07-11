<script setup>
import { ref, onMounted } from "vue";
import servicioDatosProducto from "../servicios/servicioDatosProducto.js";

let productos = ref(null);

function obtenerProductos() {
    servicioDatosProducto
        .getAll()
        .then((response) => {
            productos.value = response.data;
            console.log(response.data);
            // insertando una imagen random
            // console.log(response.data.urls.full);
            productos.value = response.data.urls.thumb;
        })
        .catch((e) => {
            console.log(e);
        });
}

onMounted(() => {
    obtenerProductos();
});
</script>
<template>
    <h6>Random</h6>
    <img :src="productos" alt="" />
    <br />

    <form action="/listado">
        <input type="submit" value="Random" />
    </form>
</template>

<style></style>
