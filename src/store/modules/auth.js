import axios from "axios";

/**
 *
 * @type {Vue.$store}
 */
export default {
    state: {
        user: {
            id: null,
            username: null,
            token: null,
            role: 0
        },
        modalMsg: null,
        showRegisterModal: false
    },
    mutations: {
        authenticate: (state, payload) => {
            state.user.id = payload.id;
            state.user.username = payload.username;
            state.user.token = payload.token;
            state.user.role = payload.role;
        },
        logout: state => {
            state.user.id = null;
            state.user.username = null;
            state.user.token = null;
            state.user.role = 0;
        },
        setMessage: (state, payload) => {
            state.modalMsg = payload
        },
        updateRegisterModalState: (state, payload) => {
            state.showRegisterModal = payload;
        }
    },
    getters: {
        isAuthenticated: state => {
            return !!state.user.token;
        },

        isAdmin: state => {
            return state.user.role === 1;
        },
        user: state => {
            return state.user;
        },
        getMessage: state => {
            return state.modalMsg;
        }
    },
    actions: {
        register: (injectee, payload) => {
            return new Promise((resolve, reject) => {
                axios.post('user/register', {
                    username: payload.username,
                    email: payload.email,
                    password: payload.password,
                })
                    .then(value => {
                        injectee.commit('setMessage', null);
                        // injectee.commit('updateRegisterModalState', false);
                        resolve(value);
                    })
                    .catch(reason => {
                        console.log(reason.response);
                        injectee.commit('setMessage', reason.response.data.msg);
                        reject(reason);
                    });
            });
        },
        login: (injectee, payload) => {
            return new Promise((resolve, reject) => {
                if (payload.username === '' || payload.password === '') {
                    injectee.commit('setMessage', 'Mbushni te gjitha fushat');
                    reject('error');
                } else {
                    axios.post('user/login', {
                        username: payload.username,
                        password: payload.password,
                    })
                        .then(value => {
                            console.log(value);
                            injectee.commit('authenticate', {
                                id: value.data.id,
                                username: value.data.username,
                                token: value.data.token,
                                role: value.data.role
                            });
                            injectee.commit('setMessage', null);
                            resolve();
                        })
                        .catch(reason => {
                            injectee.commit('setMessage', reason.response.data.msg);
                            console.log(reason.response.data);
                            reject('error');
                        });
                }
            })
        },
        logout: injectee => {
            injectee.commit('logout');
        }
    },
};


