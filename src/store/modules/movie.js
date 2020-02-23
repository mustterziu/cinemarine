import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000/api';

const headers = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};

export default {
    state: {
        allMovies: [],
        latestMovies: [],
        upcomingMovies: [],
    },
    getters: {
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
        },
    },

    actions: {
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
};


