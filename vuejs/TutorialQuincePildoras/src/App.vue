<script setup>
import Cabecera from './components/Cabecera.vue'
import Cuerpo from './components/Cuerpo.vue'
</script>

<template>
<header>      
    
    <Cabecera 
      titulo="Aplicación de pruebas" 
      contenido="Esta web es desarollado por agustin aguilera, para ser utilizada como punto de partida" 
    />
    
  </header>
  <hr/>

  <main>
    <Cuerpo titulo="Área asociada al Cuerpo" 
      contenido="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  />
  </main>
</template>

<style scoped>

</style>
