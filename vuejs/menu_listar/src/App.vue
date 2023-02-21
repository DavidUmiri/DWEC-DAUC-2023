<script setup>
import barraMenu from './components/menu.vue'
</script>

<template>
  <header>
    <barraMenu titulo="MENÚ" :links="['INICIO', 'LISTAR', 'AUTOR', 'LOREM']" />
  </header>
  <hr />
  <main>
    <RouterView />
  </main>
</template>

<style>
p {
  color: red;
}
</style>
