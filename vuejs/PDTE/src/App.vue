<script setup>
import barraMenu from './components/menu.vue'
import { ref } from 'vue'
</script>

<template>
  <header>
    <barraMenu titulo="Menú Principal" :links="['inicio', 'listar']" />
  </header>

  <hr />

  <p>aaaaaaaaaaaaaaa</p>
  <main>
    <RouterView />
  </main>
  <p>fasdfasdfasdfasdfasdfa</p>
</template>

<style>

</style>
