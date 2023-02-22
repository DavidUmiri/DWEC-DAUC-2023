<script setup>
import { ref, reactive, onMounted } from "vue";
import servicioDatosProducto from "../servicios/servicioDatosProducto";

let productos = ref(null);
let nombreProducto = ref(null);

function obtenerProductos() {
    servicioDatosProducto
        .getAll()
        .then((response) => {
            const data = response.data;
            // Ordenar los productos por su Id utilizando sort() de JavaScript
            const productosOrdenados = data.sort((a, b) => a.id - b.id);
            // Asignar los productos ordenados a la variable productos
            productos.value = productosOrdenados;
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
}

function buscarProducto() {
    servicioDatosProducto
        .findByNombre(nombreProducto.value)
        .then((response) => {
            if (response.data !== []) {
                productos.value = response.data;
            }
        })
        .catch((e) => {
            console.log(e);
        });
}

function borrarProducto(producto) {
    servicioDatosProducto
        .delete(producto.id)
        .then((response) => {
            // si funciona entra al if
            if (response.data !== []) {
                productos.value = response.data;
                console.log(response.data);
            }
            obtenerProductos();
        })
        // si no funciona esto
        .catch((e) => {
            console.log(e);
        });
}

// FIXME
function borrarTodos() {
    servicioDatosProducto
        .deleteAll()
        .then((response) => {
            // si funciona entra al if
            if (response.data !== []) {
                productos.value = response.data;
                console.log(response.data);
            }
            obtenerProductos();
        })
        // si no funciona esto
        .catch((e) => {
            console.log(e);
        });
}


let productoObj = reactive({
    id: null,
    nombre: null,
    fecha: null,
    descripcion: null,
});

function crearProducto() {
    servicioDatosProducto
        .create(JSON.stringify(productoObj))
        .then((response) => {
            productoObj = {}; // objeto vacio
            console.log("Ha insertado el elemento...");
            console.log(response.data);
            obtenerProductos();
        })
        .catch((e) => {
            console.log("Error al insertar...");
            console.log(e);
        });
}

function actualizarProducto() {
    let data = {};
    data.id = document.forms[0].elements[0].value;
    data.nombre = document.forms[0].elements[1].value;
    data.fecha = document.forms[0].elements[2].value;
    data.descripcion = document.forms[0].elements[3].value;

    servicioDatosProducto
        .update(data.id, JSON.stringify(data))
        .then((response) => {
            if (response.data !== []) {
                productos.value = response.data;
                console.log(response.data);
            }
            obtenerProductos();
        })
        .catch((e) => {
            console.log(e);
        });
}

// montado del componente --> que cuando se cargue la pagina pregunte a los productos y me los dibuje
onMounted(() => {
    obtenerProductos();
});
</script>

<template>
    <form @submit.prevent="crearProducto" action="" method="">
        <input type="number" placeholder="Id" name="id" v-model="productoObj.id" autofocus />
        <input type="text" placeholder="Nombre" name="nombre" v-model="productoObj.nombre" />
        <input type="text" placeholder="Fecha" name="fecha" v-model="productoObj.fecha" />
        <input type="text" placeholder="Descripcion" name="descripcion" v-model="productoObj.descripcion" />
        <input type="submit" value="Crear" />
        <button type="button" @click="actualizarProducto">Actualizar</button>
    </form>

    <input id="idBuscar" type="text" placeholder="Producto a buscar" v-model="nombreProducto" />
    <button type="button" @click="buscarProducto">Buscar</button>
    <br>
    <button type="button" @click="borrarTodos">Borrar todos los productos</button>

    <hr />

    <div class="contenedorProductos">
        <table class="tabla" border="1">
            <th id="th" colspan="4">Click al producto para eliminar</th>
            <tr>
                <th>Id</th>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Descripción</th>
            </tr>
            <tr @click="borrarProducto(producto)" v-for="(producto, id) in productos" :key="id">
                <td>{{ producto.id }}</td>
                <td>{{ producto.nombre }}</td>
                <td>{{ producto.fecha }}</td>
                <td>{{ producto.descripcion }}</td>
            </tr>
        </table>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
    text-align: center;
}

.contenedorProductos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}

.tabla {
    background-color: lightskyblue;
    text-align: center;
    font-size: 50%;
}

.tabla:hover {
    cursor: pointer;
}

#th {
    color: red;
}

tr,
td {
    width: 150px;
    height: 50px;
}
</style>
