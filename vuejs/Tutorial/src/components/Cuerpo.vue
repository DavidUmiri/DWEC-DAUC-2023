<script setup>
import { reactive, ref } from 'vue' // para utilizar completamente la reactividad

// definimos unas propiedades
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

// *******************************************************
// *******************************************************

// JS ASOCIADO AL PUNTO 1, 2
// variables a utillizar en el template
const contador = reactive({ cuenta: 0 })
const mensaje = ref('Hello World!')

// variables internas que no utilizare en el template
const autor = null
console.log(mensaje.value);
console.log(contador.cuenta);

// JS ASOCIADO AL PUNTO 3
let claseTitulo = ref("titulo")

setInterval(() => {
  (claseTitulo.value == "titulo2") ? claseTitulo.value = "titulo" : claseTitulo.value = "titulo2";
}, 1000)

// JS ASOCIADO AL PUNTO 4 
const contadorP4 = ref(0)

function incrementar() {
  contador.cuenta++
}

function decrementar() {
  contador.cuenta--
}

// JS ASOCIADO AL PUNTO 5
let claseTituloP4 = ref("")

// JS ASOCIADO AL PUNTO 6
const increible = ref(true)

function estado() {
  increible.value = !increible.value // lo pasa a booleano
}

// JS ASOCIADO AL PUNTO 7
let id = 0
const newTodo = ref('')

const todos = ref([
  { id: id++, text: 'Limones' },
  { id: id++, text: 'Fresas' },
  { id: id++, text: 'Cerezas' },
  { id: id++, text: 'Peras' }
])

const textoInput = "Especifica un valor";

function addTodo() {
  if (newTodo.value != "") {
    if (todos.value.find(e => e.text.toLowerCase() === newTodo.value.toLowerCase())) {
      newTodo.value = ''
      console.log("repetido");
    } else {
      todos.value.push({ id: id++, text: newTodo.value })
      newTodo.value = ''
      console.log("insertado");
    }
  } else {
    console.log("Tarea vacia");
  }
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

// JS ASOCIADO AL PUNTO 8
// JS ASOCIADO AL PUNTO 9
// JS ASOCIADO AL PUNTO 10
// JS ASOCIADO AL PUNTO 11
// JS ASOCIADO AL PUNTO 12
// JS ASOCIADO AL PUNTO 13
// JS ASOCIADO AL PUNTO 14
// JS ASOCIADO AL PUNTO 15

</script>

<!-- ******************************************************* -->
<!-- ******************************************************* -->

<template>

  <h1>Punto 1</h1>
  <h1>{{ titulo }} </h1>
  <h3>{{ contenido }} </h3>

  <hr>
  <h1>Punto 2</h1>
  <h2>Declarative Rendering</h2>
  <p>Mensaje: {{ mensaje }}</p>
  <p>Cuenta: {{ contador.cuenta }}</p>

  <hr>
  <h1>Punto 3</h1>
  <h2>Attribute Bindings / Enlaces de atributo</h2>
  <h1 :class="claseTitulo">{{ claseTitulo }}</h1>

  <hr>
  <h1>Punto 4</h1>
  <h2>Event Listeners</h2>
  <button @click="incrementar">incrementar</button>
  <button @click="decrementar">decrementar</button>
  <p>El contador es {{ contador.cuenta }}</p>

  <hr>
  <h1>Punto 5</h1>
  <h2 :class="claseTituloP4">Form Bindings, bindeo input []</h2>
  <input v-model="claseTituloP4" placeholder="Escribe algo">

  <hr>
  <h1>Punto 6</h1>
  <h2>Conditional Rendering / Representación condicional</h2>
  <button @click="estado">cambiar</button>
  <h1 v-if="increible">👨‍🦲</h1>
  <h1 v-else>🎅</h1>

  <hr>
  <h1>Punto 7</h1>
  <h2>List Rendering / Representación de lista</h2>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" :placeholder="textoInput">
    {{ newTodo }}
    <button>Añadir</button>
  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">❌</button>
    </li>
  </ul>

  <hr>
  <h1>Punto 8</h1>
  <h2>Computed Property / Propiedad calculada</h2>


  <hr>
  <h1>Punto 9</h1>
  <h2></h2>

  <hr>
  <h1>Punto 10</h1>
  <h2></h2>

  <hr>
  <h1>Punto 11</h1>
  <h2></h2>

  <hr>
  <h1>Punto 12</h1>
  <h2></h2>

  <hr>
  <h1>Punto 13</h1>
  <h2></h2>

  <hr>
  <h1>Punto 14</h1>
  <h2></h2>

  <hr>
  <h1>Punto 15</h1>
  <h2></h2>

</template>

<!-- ******************************************************* -->
<!-- ******************************************************* -->

<style scoped>
.titulo {
  text-align: center;
  color: red;
}

.titulo2 {
  text-align: left;
  color: blue;
}

h3 {
  color: darkgreen;
  font-size: 2vw;
}
</style>