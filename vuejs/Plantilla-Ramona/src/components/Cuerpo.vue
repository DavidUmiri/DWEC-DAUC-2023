<script setup>
import { reactive, ref } from 'vue'
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

// JS ASOCIADO AL PUNTO 1

// variables a utillizar en el template
const contador = reactive({ contador: 0 })
const mensaje = ref('Hello World!')

// variables internas que no utilizare en el template
const autor = null
console.log(mensaje.value);
console.log(contador.cuenta);

// JS ASOCIADO AL PUNTO 2

// JS ASOCIADO AL PUNTO 3 
</script>

<template>
  <!-- <h1>{{ titulo }} </h1> -->
  <!-- <h3>{{ contenido }} </h3> -->

  <h1>Punto 1</h1>
  <p>{{ mensaje }}</p>

  <hr>
  <h1>Punto 2</h1>
  <h2>Declarative Rendering</h2>

  <hr>
  <h1>Punto 3</h1>

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