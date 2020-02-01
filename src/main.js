import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faUsers, faUserGraduate, fas } from '@fortawesome/free-solid-svg-icons'
import Toasted from 'vue-toasted';
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




import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

Axios.defaults.baseURL = 'http://localhost:4000/api/';
Vue.prototype.$http = Axios;

Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);
Vue.use(Toasted);

Vue.component('header-component', HeaderComponent);
Vue.component('footer-component', FooterComponent);
Vue.component('font-awesome-icon', FontAwesomeIcon);


import store from './store';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
