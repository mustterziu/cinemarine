import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4000/api/';

import auth from './modules/auth';

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        config: {
            bgcolor: '#FFFFFF',
            textcolor: '#000000'
        },
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    },

    modules: {auth}
});
