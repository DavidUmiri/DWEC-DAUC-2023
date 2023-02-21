import { createRouter, createWebHistory } from "vue-router";
import inicio from "@/paginas/inicio.vue";
import listar from "@/paginas/listar.vue";
import autor from "@/paginas/autor.vue";
import lorem from "@/paginas/lorem.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {
            path: '/',
            name: 'INICIO',
            component: inicio
        },
        {
            path: '/listado',
            name: 'LISTAR',
            component: listar
        },
        {
            path: '/autor',
            name: 'AUTOR',
            component: autor
        },
        {
            path: '/lorem',
            name: 'LOREM',
            component: lorem
        },

        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'inicio' })
        }
    ]

});

export default router;