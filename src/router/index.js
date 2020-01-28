import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import Programi from "../views/Programi";
import KontaktiComponent from "../views/KontaktiComponent";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/programi',
        name: 'programi',
        component: Programi
    },
    {
        path: '/kontakti',
        name: 'kontakti',

        component: KontaktiComponent
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
