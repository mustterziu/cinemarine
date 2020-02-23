import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import vuetify from './plugins/vuetify';
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas, faUser, faUserGraduate, faUsers} from '@fortawesome/free-solid-svg-icons'
import Toasted from 'vue-toasted';
import VueToast from 'vue-toast-notification';
import Croppa from 'vue-croppa'
import ToggleButton from 'vue-js-toggle-button'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Loading from 'vue-loading-overlay';

import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/src/jquery.js'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import 'argon-design-system-free/assets/css/argon.min.css'
import 'argon-design-system-free/assets/js/argon.min'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all.min'
import 'swiper/dist/css/swiper.css'
import 'vue-loading-overlay/dist/vue-loading.css';

import HeaderComponent from './views/shared/HeaderComponent.vue'
import FooterComponent from './views/shared/FooterComponent.vue'

Vue.config.productionTip = false;

library.add(faUser, faUsers, faUserGraduate, fas);

Axios.defaults.baseURL = 'http://localhost:4000/api/';
Vue.prototype.$http = Axios;

Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);
Vue.use(Toasted);
Vue.use(VueToast);
Vue.use(Croppa);
Vue.use(ToggleButton);
Vue.use(VueAwesomeSwiper);
Vue.use(Loading);
Vue.component('loading', Loading);

Vue.component('header-component', HeaderComponent);
Vue.component('footer-component', FooterComponent);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.directive('navconfig', {
    bind(el, binding, vnode) {
        if (binding.value.position === 'sticky') {
            el.classList.add('fixed-top');
        }
        el.classList.add(`navbar-${binding.value.color}`);
        el.classList.add(`bg-${binding.value.color}`);

        el.__navbar_unwatch__ = store.watch(state => state.config.navbar, navbar => {
            if (navbar !== 'sticky') {
                el.classList.remove('fixed-top');
            } else {
                el.classList.add('fixed-top');
            }
        });

        let bindColor = binding.value.color;
        el.__navcolor_unwatch__ = store.watch(state => state.config.navcolor, (navcolor, bindColor) => {
          console.log(bindColor);
          el.classList.remove(`navbar-${bindColor}`);
          el.classList.remove(`bg-${bindColor}`);
          el.classList.add(`navbar-${navcolor}`);
          el.classList.add(`bg-${navcolor}`);
        });
    },
    unbind() {
        el.__navbar_unwatch__ && el.__navbar_unwatch__();
        el.__navcolor_unwatch__ && el.__navcolor_unwatch__();
    }
});


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
