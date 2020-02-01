import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        user: {
            username: '',
            token: '',
            isLoggedIn: false,
            role: 0,
            config: {
                bgcolor: '#FFFFFF',
                textcolor: '#000000'
            }
        }
    },
    getters: {
        isAuthenticated: state => state.user.loggedIn,
        isAdmin: state => state.user.role === 1
    }
});
