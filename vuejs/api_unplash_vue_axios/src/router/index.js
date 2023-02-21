import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import autor from "@/paginas/autor.vue";
import lorem from "@/paginas/lorem.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {
            path: '/',
            name: 'inicio',
            component: paginaInicio
        },
        {
            path: '/listado',
            name: 'listar',
            component: paginaListar
        },
        {
            path: '/autor',
            name: 'autor',
            component: autor
        },
        {
            path: '/lorem',
            name: 'lorem',
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