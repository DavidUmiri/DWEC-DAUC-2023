<script setup>
import barraMenu from './components/menu.vue'
import { ref } from 'vue'
</script>

<template>
  <header>
    <barraMenu titulo="Menú Principal" :links="['inicio', 'listar', 'autor', 'lorem', 'apiImagenes']" />
  </header>

  <hr />

  <p>APP se mantiene</p>
  <main>
    <RouterView />
  </main>
  <p>FIN se mantiene</p>
</template>

<style>

</style>
