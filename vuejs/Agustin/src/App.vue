<script setup>
import barraMenu from './components/menu.vue'
import { ref } from 'vue'
</script>

<template>
  <header>
    <barraMenu titulo="Menú Principal" :links="['inicio', 'listar', 'autor', 'lorem']" />
  </header>

  <hr />

  <p>APP</p>
  <main>
    <RouterView />
  </main>
  <p>FIN</p>
</template>

<style>

</style>
