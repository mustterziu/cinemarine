import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';
const token = localStorage.getItem('token');
// if (token != null) {
//     axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
// }

const headers = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};

import auth from './modules/auth';
import movie from './modules/movie';
import contact from "./modules/contact";

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        config: {
            navbar: 'sticky',
            navcolor: 'white'
        },
        loading: false,
        users: []
    },
    getters: {
        isLoading: state => {
            return state.loading
        },
        getUsers: state => {
            return state.users
        },
        getNavPosition: state => {
            return state.config.navbar
        },
        getNavColor: state => {
            return state.config.navcolor
        }
    },

    mutations: {
        setLoading: (state, payload) => {
            state.loading = payload
        },
        setAllUsers: (state, payload) => {
            state.users = payload
        },
        setNavbarPosition: (state, payload) => {
            state.config.navbar = payload
        },
        setNavbarColor: (state, payload) => {
            state.config.navcolor = payload
        }
    },
    actions: {
        //Users
        getAllUsers: injectee => {
            injectee.commit('setLoading', true);
            axios.get('/users', {headers: headers()})
                .then(value => {
                    injectee.commit('setLoading', false);
                    injectee.commit('setAllUsers', value.data);
                })
                .catch(reason => {
                    injectee.commit('setLoading', true);
                    throw reason.response.data
                })
        },
        deleteUser: (injectee, payload) => {
            injectee.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                axios.delete(`/users/${payload}`, {headers: headers()})
                    .then(value => {
                        injectee.commit('setLoading', false);
                        resolve(value);
                    })
                    .catch(reason => {
                        injectee.commit('setLoading', false);
                        reject(reason);
                    })
            });
        },
        editUser: ({commit, dispatch}, payload) => {
            axios.put(`/users/${payload.id}`,{role: payload.role}, {headers: headers()})
                .then(value => {
                    console.log(value);
                })
                .catch(reason => {
                    console.log(reason);
                })
        },
        //Config
        setNavPosition: (injectee, payload) => {
            injectee.commit('setNavbarPosition', payload);
        },
        setNavColor: (injectee, payload) => {
            injectee.commit('setNavbarColor', payload);
        },
        getConfig: injectee => {
            axios.get('/users/config', {headers: headers()})
                .then(value => {
                    injectee.commit('setNavbarColor', value.data.navbarColor);
                    injectee.commit('setNavbarPosition', value.data.navbarPosition);
                })
                .catch(reason => {
                    console.log(reason);
                });
        },
        updateUserConfig: (injectee, payload) => {
            axios.post('/users/config', payload, {headers: headers()})
                .then(value => {

                })
                .catch(reason => {
                    console.log(reason);
                })
        },
        setDefaultConfig: injectee => {
            injectee.commit('setNavbarColor', 'white');
            injectee.commit('setNavbarPosition', 'sticky');
        },
        //TODO Programi actions

    },
    modules: {auth, movie, contact}
});
