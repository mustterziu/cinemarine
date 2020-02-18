<template>
    <div>
        <v-data-table :headers="headers" :items="movies" i>
            <template v-slot:top>
                <MovieModal ref="movieModal"></MovieModal>
            </template>
            <template v-slot:item.image="{item}">
                <img :src="getBaseImg(item.image)" alt="" height="200" width="200">
            </template>
            <template v-slot:item.commingSoon="{item}">
                <toggle-button :value="item.comingSoon" @change="changeValue(item)"
                               :labels="{checked: 'Upcomming', unchecked: 'Duke u Shfaqur'}" :width="100">asd
                </toggle-button>
            </template>
            <template v-slot:item.action="{ item }">
                <a @click="editMovie(item)">
                    <v-icon small class="mr-3 ms-icon">fas fa-edit</v-icon>
                </a>
                <a @click="showDeleteModal(item)">
                    <v-icon small class="mr-3 ms-icon">fas fa-trash</v-icon>
                </a>
            </template>

        </v-data-table>
        <b-modal v-model="showConfirmation" size="sm" :hide-header="true" :hide-footer="true">
            <div class="card">
                <div class="card-header">
                    <div class="text-center">Konfirmo Fshirjen</div>
                </div>
            </div>
            <div class="card-body">
                <ul>
                    <li>Titulli: {{selectedItem.title}}</li>
                    <li>Pershkrimi: {{selectedItem.description}}</li>
                </ul>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-danger" @click="deleteMovie">
                        <v-icon>fas fa-trash</v-icon>
                    </button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import MovieModal from "./MovieModal";

    export default {
        components: {MovieModal},
        computed: {
            ...mapGetters({movies: 'allMovies'})
        },
        name: 'MovieTable',
        data: () => ({
            showConfirmation: false,
            dialog: false,
            headers: [
                {text: 'foto', value: 'image', sortable: false, width: 200},
                {text: 'titulli', value: 'title'},
                {text: 'viti', value: 'releaseYear'},
                {text: 'director', value: 'director'},
                {text: 'zhanret', value: 'genres'},
                {text: 'upcomming', value: 'commingSoon', width: 100},
                {text: 'veprimet', value: 'action'}
            ],
            selectedItem: {},
        }),

        methods: {
            showDeleteModal(item) {
                console.log('clicked');
                this.selectedItem = item;
                this.showConfirmation = true;
            },
            getBaseImg(item) {
                let base64 = new Buffer(item.data, 'binary').toString('base64');
                return `data:${item.data.mimeType};base64,${base64}`;
            },
            changeValue(item) {
                item.comingSoon = !item.comingSoon;
                this.$store.dispatch('changeMovieStatus', {id: item._id, value: item.comingSoon});
            },
            editMovie(movie){
                this.$refs.movieModal.editModal(movie);
            },
            deleteMovie(){
                this.$store.dispatch('deleteMovie', this.selectedItem._id)
                    .then(value => {
                        this.showConfirmation = false;
                        this.selectedItem = {};
                        this.$toasted.show("Filmi u fshi me sukses", {duration: 3000, position:"top-center"});
                    })
                    .catch(reason => {
                        console.log(reason);
                    });
            }
        },

        created() {
            this.$store.commit('setLoading', true);
            this.$store.dispatch('getAllMovies').then(value => {
                this.$store.commit('setLoading', false)
            });
        }
    }
</script>

<style scoped>

</style>
