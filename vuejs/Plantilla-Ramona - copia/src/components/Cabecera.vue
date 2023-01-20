<script setup>
import { ref } from "vue";
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

//Variable General, interna del módulo.
const nombre = ref("Agustin")

</script>

<template>
  <h1> {{ nombre }} </h1>
  <h3> {{ contenido }}</h3>

</template>

<style scoped>
h1 {
  text-align: center;
}

h3 {
  color: darkgray;
  font-size: 2vw;
}
</style>
