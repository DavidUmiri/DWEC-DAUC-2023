<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    "titulo": String,
    "links": Array,
})

</script>

<template>
    <hr>
    <span>{{ props.titulo }}</span>
    <hr>
    <nav>
        <RouterLink v-for="enlace in props.links" :key="enlace" :to="{ name: enlace }">
            <td>{{ enlace }}</td>
        </RouterLink>
    </nav>
</template>

<style scoped>
nav {
    font-size: 50%;
}

td {
    width: 50%;
    height: 0%;
}

td:hover {
    background-color: black;
    color: white;
}
</style>