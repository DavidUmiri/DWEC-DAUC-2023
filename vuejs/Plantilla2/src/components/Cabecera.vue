<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>{{ titulo.toUpperCase() }}</h1>
  <h3>{{ contenido }}</h3>
</template>

<style scoped>
h1 {
  color: lightcoral;
}

h3 {
  color: lightgreen;
}
</style>
