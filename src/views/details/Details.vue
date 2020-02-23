<template>
    <div class="details">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <img :src="getImageUrl(movie.image)" height="200" width="200"/>
                        </div>
                        <div class="col-md-6">
                            <input
                                    class="form-control mb-1"
                                    id="title"
                                    type="text"
                                    :placeholder="movie.title"
                                    readonly
                            />
                            <input class="form-control mb-1" type="text" :placeholder="movie.releaseYear" readonly/>
                            <input class="form-control mb-1" type="text" :placeholder="movie.genres" readonly/>
                            <input class="form-control mb-1" type="text" :placeholder="movie.cast" readonly/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h4>Pershkrimi</h4>
                    <p class="text-justify">{{movie.description}}</p></div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Ditet</th>
                            <th scope="col">Terminet</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">E hene</th>
                            <td>13:30, 17:30, 21:00</td>
                        </tr>
                        <tr>
                            <th scope="row">E marte</th>
                            <td>13:30, 17:30, 21:00</td>
                        </tr>
                        <tr>
                            <th scope="row">E merkure</th>
                            <td>13:30, 17:30, 21:00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                    <iframe width="560" height="315" :src="getEmbedUrl(movie.trailerVideoUrl)" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Details",
        data() {
            return {
                movie: {},
            }
        },
        methods: {
            getImageUrl(item) {
                return `http://localhost:4000/public/${item}`;
            },
            getEmbedUrl(url) {
                const param = url.split('?v=')[1];
                return `https://www.youtube.com/embed/${param}`;
            }
        },
        created() {
            console.log(this.$route.params);
            this.$store.dispatch('getMovieDetails', this.$route.params.id)
                .then(value => {
                    console.log(value);
                    this.movie = value;
                })
                .catch(reason => {
                    this.$router.push('/');
                })
        }
    };
</script>

<style scoped>
    .details {
        margin-top: 120px;
    }

    .v-application .mb-1 {
        background-color: white;
    }
</style>
