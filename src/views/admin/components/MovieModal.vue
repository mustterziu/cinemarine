<template>
    <div>
        <a title="Login" class="btn btn-link btn-sm" @click="modalShow = !modalShow">
            <span class="nav-link-inner--text">Shto film te ri!</span>
        </a>
        <b-modal v-model="modalShow" size="lg">
            <template v-slot:modal-header>
                <h5 v-if="!editing" class="modal-title text-center text-muted">Shto film te ri</h5>
                <h5 v-if="editing" class="modal-title text-center text-muted">Ndrysho detajet per filmin</h5>
                <button type="button" class="close" aria-label="Close" @click="modalShow = !modalShow">
                    <span aria-hidden="true">&times;</span>
                </button>
            </template>

            <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="title">Titulli</label>
                            <input class="form-control" type="text" id="title" v-model="title" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="release">Viti i prodhimit</label>
                            <input class="form-control" type="number" id="release" v-model="releaseYear" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="upcoming">Statusi</label>
                            <select class="form-control" name="comingSoon" id="upcoming" v-model="comingSoon" required>
                                <option value="false">Duke u shfaqur</option>
                                <option value="true">Coming Soon</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="director">Director</label>
                            <input class="form-control" type="text" id="director" v-model="director" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="trailer">Traileri</label>
                            <input class="form-control w-100" type="text" id="trailer" v-model="trailerVideoUrl" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <croppa v-model="croppa"
                                :width="200"
                                :height="200"
                                placeholder="Upload image"
                                :placeholder-font-size="14"
                                remove-button-color="black"
                                :prevent-white-space="true">
                            <img v-if="editing" crossOrigin="anonymous" :src="image"
                                 slot="initial">
                        </croppa>
                    </div>
                    <div class="col-md-6">
                        <label for="description">Pershkrimi</label><br>
                        <textarea class="form-control" id="description" cols="30" rows="10"
                                  v-model="description" required></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <label for="genre">Zhanri</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="genre" v-model="genre">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" @click="addGenre()">Shto
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="container">
                            <span v-for="item in genres" class="badge badge-pill badge-success pt-3 mb-3 mr-2">{{item}}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                                        @click="removeGenre(item)">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <label for="actor">Aktori</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="actor" v-model="actor">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" @click="addActor()">Shto
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="container">
                            <span v-for="item in cast" class="badge badge-pill badge-warning pt-3 mb-3 mr-2">{{item}}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                                        @click="removeActor(item)">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <template v-slot:modal-footer="{}">
                <b-button size="sm" variant="outline-danger" @click="clearForm">
                    Pastro
                </b-button>
                <b-button size="sm" variant="outline-danger" @click="modalShow = !modalShow">
                    Mbylle
                </b-button>
                <b-button size="sm" variant="outline-primary" @click="upload">
                    Ruaj
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    export default {

        name: "MovieModal",
        data() {
            return {
                editing: false,
                id: '',
                genre: '',
                actor: '',

                croppa: {},
                modalShow: false,
                title: '',
                description: '',
                releaseYear: null,
                image: null,
                trailerVideoUrl: null,
                director: '',
                genres: [],
                cast: [],
                comingSoon: false
            }
        },
        methods: {
            clearForm() {
                this.genres = [];
                this.cast = [];
                this.croppa.remove();
                this.title = '';
                this.description = '';
                this.releaseYear = '';
                this.trailerVideoUrl = '';
                this.director = '';
                this.image = '';
                this.editing = false;
            },
            getBaseImg: (item) => {
                let base64 = new Buffer(item.data, 'binary').toString('base64');
                return `data:${item.data.mimeType};base64,${base64}`;
            },

            editModal: function (movie) {
                this.modalShow = true;
                this.editing = true;

                this.id = movie._id;
                this.title = movie.title;
                this.description = movie.description;
                this.director = movie.director;
                this.releaseYear = movie.releaseYear;
                this.genres = movie.genres;
                this.cast = movie.cast;
                this.comingSoon = movie.comingSoon;
                this.trailerVideoUrl = movie.trailerVideoUrl;
                this.image = this.getBaseImg(movie.image);
            },
            addGenre: function () {
                if (this.genre !== '' && !this.genres.includes(this.genre)) {
                    this.genres.push(this.genre);
                    this.genre = '';
                }
            },
            removeGenre: function (item) {
                this.genres = this.genres.filter(value => {
                    return value !== item;
                });
            },
            addActor: function () {
                if (this.actor !== '' && !this.cast.includes(this.actor)) {
                    this.cast.push(this.actor);
                    this.actor = '';
                }
            },
            removeActor: function (item) {
                this.cast = this.cast.filter(value => {
                    return value !== item;
                });
            },

            upload: async function () {
                if ((!this.croppa.hasImage() || this.croppa.getChosenFile() == null) && !this.editing) {
                    alert('Nuk ka file te zgjedhur.');
                    return
                }
                const blob = await this.croppa.promisedBlob();

                const form = new FormData();

                if (this.croppa.getChosenFile()) form.append('file', blob, this.croppa.getChosenFile().name);
                form.append('title', this.title);
                form.append('description', this.description);
                form.append('releaseYear', this.releaseYear);
                form.append('trailerVideoUrl', this.trailerVideoUrl);
                form.append('director', this.director);
                if (this.editing) {
                    form.append('id', this.id);
                }
                this.genres.forEach((value) => {
                    console.log(value);
                    form.append("genres", value);
                });
                this.cast.forEach(value => {
                    form.append("cast", value);
                });



                console.log('before action', form);
                let promise;
                if (this.editing)
                    promise = this.$store.dispatch('editMovie', {id: this.id, form});
                else
                    promise = this.$store.dispatch('postMovie', form);

                promise.then(value => {
                    this.$toasted.show('Filmi u ruajt me sukses.', {position: "top-center", duration: 3000});
                    this.modalShow = false;
                    this.editing = false;
                    this.clearForm();
                    })
                    .catch(reason => {
                        this.$toasted.error(reason.response.data || reason.response.data.message, {
                            position: "top-center",
                            duration: 3000
                        });
                        console.log(reason);
                    });
            }
        },

    }
</script>

<style scoped>
    .badge .close {
        margin-left: 0.25rem;
        color: inherit;
        font-size: 100%;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    }

</style>
