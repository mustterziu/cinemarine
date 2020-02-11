import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4000/api/';
const token = localStorage.getItem('token');
if(token != null){
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}

import auth from './modules/auth';
import header from "vuetify/lib/components/VDataTable/mixins/header";

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        config: {
            bgcolor: '#FFFFFF',
            textcolor: '#000000'
        },
        messages: [],
        loading: false,
    },

    getters: {
        isLoading: state => {
            return state.loading
        },
        messages: state => {
            return state.messages
        }
    },

    mutations: {
        messages: (state, payload) => {
            state.messages = payload
        },
        setLoading: (state, payload) => {
            state.loading = payload
        }
    },
    actions: {
        getMessages: injectee => {
            let headers= {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            };
            injectee.commit('setLoading', true);
            axios.get('contact', {headers}).then(value => {
                console.log(value.data);
                injectee.commit('messages', value.data);
                injectee.commit('setLoading', false);
            }).catch(reason => console.log(reason.response));
        },
        deleteMessage: (injectee, payload) => {
            let headers= {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            };
            axios.delete(`/contact/${payload}`, {headers}).then(value => {
              console.log(value);
              injectee.dispatch('getMessages');
            }).catch(reason => console.log(reason));
        },
        postMessage: (injectee, payload) => {
            return new Promise((resolve, reject) => {
                axios.post('/contact', {
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    message: payload.message
                }).then(value => {
                    console.log('store', value);
                    resolve(value);
                }).catch(reason => {
                    console.log(reason);
                    reject(reason)
                });
            });

        }

    },

    modules: {auth}
});
