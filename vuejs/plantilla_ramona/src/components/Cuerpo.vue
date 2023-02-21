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
  <h1>{{ titulo }} </h1>
  <h3>{{ contenido }} </h3>

</template>

<style scoped>
h1 {
  text-align: center;
}

h3 {
  color: darkgreen;
  font-size: 2vw;
}
</style>

