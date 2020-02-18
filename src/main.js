import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faUsers, faUserGraduate, fas } from '@fortawesome/free-solid-svg-icons'
import Toasted from 'vue-toasted';
import VueToast from 'vue-toast-notification';
import Croppa from 'vue-croppa'
import ToggleButton from 'vue-js-toggle-button'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Loading from 'vue-loading-overlay';




import Axios from 'axios';

library.add(faUser, faUsers, faUserGraduate, fas);

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



import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

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


import store from './store/store';
import vuetify from './plugins/vuetify';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
