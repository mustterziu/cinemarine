import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faUsers, faUserGraduate, fas } from '@fortawesome/free-solid-svg-icons'


library.add(faUser, faUsers, faUserGraduate, fas);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


import 'argon-design-system-free/assets/css/argon.min.css'
import 'argon-design-system-free/assets/js/argon.min'


import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all.min'


Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

Vue.component('header-component', HeaderComponent);
Vue.component('footer-component', FooterComponent);
Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
