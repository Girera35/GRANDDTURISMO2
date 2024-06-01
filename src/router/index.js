import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '@/components/TheHome.vue';
import TheFilm from '@/components/TheFilm.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TheHome
    },
    {
        path: '/watch-movie',
        name: 'WatchMovie',
        component: TheFilm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
