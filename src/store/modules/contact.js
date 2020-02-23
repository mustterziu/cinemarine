import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000/api';

const headers = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};

/**
 *
 * @type {Vue.$store}
 */
export default {
    state: {
        messages: [],
    },
    getters: {

        messages: state => {
            return state.messages
        },
    },
    mutations: {
        messages: (state, payload) => {
            state.messages = payload
        },
    },
    actions: {
        getMessages: injectee => {
            let headers = {
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
            axios.delete(`/contact/${payload}`, {headers: headers()}).then(value => {
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
        },
    }
}
