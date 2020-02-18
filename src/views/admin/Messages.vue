<template>
    <div>
        <div v-if="isLoading">Loading</div>
        <button @click="refresh()">Refresh</button>
        <v-data-table :headers="headers" :items="messages" i>
            <template v-slot:top>

            </template>

            <template v-slot:item.action="{ item }">
                <v-icon small class="mr-3">fas fa-eye</v-icon>

                <a @click="showDeleteModal(item)">
                    <v-icon small class="mr-3 ms-icon">fas fa-trash</v-icon>
                </a>
            </template>

        </v-data-table>
        <b-modal v-model="showConfirmation" size="sm" :hide-header="true" :hide-footer="true">
            <div class="card">
                <div class="card-header"><div class="text-center">Konfirmo Fshirjen</div></div>
            </div>
            <div class="card-body">
                <ul>
                    <li>email: {{selectedItem.email}}</li>
                    <li>mesazhi: {{selectedItem.message}}</li>
                </ul>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-danger" @click="deleteMessage(selectedItem._id)">
                        <v-icon>fas fa-trash</v-icon>
                    </button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({messages: 'messages', isLoading: 'isLoading'}),
        },
        data() {
            return {
                selectedItem: {},
                showConfirmation: false,
                headers: [
                    {text: 'emri', value: 'name'},
                    {text: 'email', value: 'email'},
                    {text: 'telefoni', value: 'phone'},
                    {text: 'mesazhi', value: 'message', width: '45%'},
                    {text: 'data', value: 'date'},
                    {text: 'veprimi', value: 'action'}
                ]
            }
        },
        name: "Messages",
        methods: {
            showDeleteModal(item) {
                console.log('clicked');
                this.selectedItem = item;
                this.showConfirmation = true;
                console.log(item);
            },
            refresh: function () {
                this.$store.dispatch('getMessages');
            },
            deleteMessage(id){
                this.$store.dispatch('deleteMessage', id).then(value => {
                    this.showConfirmation = false;
                    this.selectedItem = false;
                });
            }
        },
        created() {
            this.$store.dispatch('setLoading', true);
            this.$store.dispatch('getMessages').then(value => {
                this.$store.commit('setLoading', false);
            });
        }
    }
</script>

<style scoped>
    .v-icon:hover {
        color: blue;
    }
</style>
