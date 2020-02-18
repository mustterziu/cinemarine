import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import Programi from "../views/Programi";
import KontaktiComponent from "../views/KontaktiComponent";
import Dashboard from "../views/admin/Dashboard";
import store from '../store/store';
import Details from '../views/details/Details';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            store.commit('setLoading', true);
            next();
        }
    },
    {
        path: '/programi',
        name: 'programi',
        component: Programi
    },
    {
        path: '/detajet/:id',
        name: 'details',
        component: Details,
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
    },
    {
        path: '/admin',
        name: 'admin',
        component: Dashboard,
        beforeEnter (to, from, next) {
            store.commit('setLoading', true);
            if (store.state.auth.user.token) {
                next()
            } else {
                next('/')
            }
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
