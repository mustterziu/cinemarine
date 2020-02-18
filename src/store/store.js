import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4000/api/';
const token = localStorage.getItem('token');
// if (token != null) {
//     axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
// }

import auth from './modules/auth';

const headers = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        config: {
            bgcolor: '#FFFFFF',
            textcolor: '#000000'
        },
        messages: [],
        loading: false,
        allMovies: [],
        latestMovies: [],
        upcomingMovies: [],
    },

    getters: {
        isLoading: state => {
            return state.loading
        },
        messages: state => {
            return state.messages
        },

        allMovies: state => {
            return state.allMovies
        },
        latestMovies: state => {
            return state.latestMovies;
        },
        upcomingMovies: state => {
            return state.upcomingMovies;
        }

    },

    mutations: {
        messages: (state, payload) => {
            state.messages = payload
        },
        setLoading: (state, payload) => {
            state.loading = payload
        },

        setAllMovies: (state, payload) => {
            state.allMovies = payload
        },
        setLatestMovies: (state, payload) => {
            state.latestMovies = payload
        },
        setUpcomingMovies: (state, payload) => {
            state.upcomingMovies = payload;
        },
        addMovie: (state, payload) => {
            state.allMovies.push(payload);
        }
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

        getMovieDetails: (injectee, payload) => {
            return new Promise((resolve, reject) => {
                axios.get(`/movies/${payload}`)
                    .then(value => {
                        console.log(value);
                        resolve(value.data);
                    })
                    .catch(reason => {
                        reject(reason);
                    })
            });
        },
        getAllMovies: injectee => {
            return new Promise((resolve, reject) => {
                axios.get('/movies', {headers: headers()})
                    .then(value => {
                        injectee.commit('setAllMovies', value.data);
                        resolve(value);
                    }).catch(reason => {
                    reject(reason);
                });
            });
        },
        postMovie: (injectee, payload) => {
            return new Promise((resolve, reject) => {
                axios.post('/movies', payload, {headers: headers()})
                    .then(value => {
                        console.log(value.data);
                        injectee.commit('addMovie', value.data.movie);
                        resolve(value);
                    })
                    .catch(reason => {
                        console.log(reason.response);
                        reject(reason);
                    });
            })
        },
        editMovie: (injectee, payload) => {
            console.log(payload.id);
            return new Promise((resolve, reject) => {
                axios.put(`/movies/${payload.id}`, payload.form, {headers: headers()})
                    .then(value => {
                        injectee.dispatch('getAllMovies');
                        resolve(value);
                    }).catch(reason => {
                    reject(reason);
                });
            });
        },
        getLatestMovies: injectee => {
            axios.get('/movies/latest').then(value => {
                injectee.commit('setLatestMovies', value.data);
            }).catch(reason => {
                console.log(reason);
            })
        },
        getUpcomingMovies: injectee => {
            axios.get('/movies/upcoming')
                .then(value => {
                    injectee.commit('setUpcomingMovies', value.data);
                })
                .catch(reason => {
                    console.log(reason);
                })
        },
        changeMovieStatus: (injectee, payload) => {
            axios.put(`/movies/changeStatus/${payload.id}`, {value: payload.value}, {headers: headers()})
                .then(value => {
                    console.log(value);
                })
                .catch(reason => {
                    console.log(reason);
                })
        },
        deleteMovie: (injectee, payload) => {
            return new Promise((resolve, reject) => {
                axios.delete(`/movies/${payload}`, {headers: headers()})
                    .then(value => {
                        injectee.dispatch('getAllMovies');
                        resolve();
                    })
                    .catch(reason => {
                        reject(reason);
                    })
            });
        }
    },
    modules: {auth}
});
