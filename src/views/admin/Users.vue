<template>
    <div class="container--fluid">
        <v-data-table :headers="headers" :items="users" i>
            <template v-slot:top>
            </template>
            <template v-slot:item.action="{ item }">
                <a @click="showEdit(item)">
                    <v-icon small class="mr-3">fas fa-edit</v-icon>
                </a>
                <a @click="showDeleteModal(item)">
                    <v-icon small class="mr-3 ms-icon">fas fa-trash</v-icon>
                </a>
            </template>
        </v-data-table>
        <b-modal v-model="showDeleteConfirmation" size="sm" :hide-header="true" :hide-footer="true">
            <div class="card">
                <div class="card-header">
                    <div class="text-center">Konfirmo Fshirjen</div>
                </div>
            </div>
            <div class="card-body">
                <ul>
                    <li>username: {{selectedItem.username}}</li>
                    <li>email: {{selectedItem.email}}</li>
                </ul>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-danger" @click="deleteUser()">
                        <v-icon>fas fa-trash</v-icon>
                    </button>
                </div>
            </div>
        </b-modal>
        <b-modal v-model="showEditModal" size="md" :hide-header="true">
            <div class="card">
                <div class="card-header">
                    <div class="text-center">Edit User</div>
                </div>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input class="form-control" type="text" id="username" :value="selectedItem.username"
                                       readonly>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input class="form-control" type="text" id="email" :value="selectedItem.email" readonly>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="role">Roli</label>
                            <select class="form-control" name="comingSoon" id="role" v-model="selectedItem.role"
                                    required>
                                <option value="0">User</option>
                                <option value="1">Admin</option>
                            </select>
                        </div>

                    </div>
                </form>
            </div>
            <template v-slot:modal-footer="{}">
                <b-button size="sm" variant="outline-danger" @click="showEditModal = !showEditModal">
                    Mbylle
                </b-button>
                <b-button size="sm" variant="outline-primary" @click="saveUser">
                    Ruaj
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Users",
        computed: {
            ...mapGetters({users: 'getUsers'})
        },
        data() {
            return {
                headers: [
                    {text: 'username', value: 'username'},
                    {text: 'email', value: 'email'},
                    {text: 'roli', value: 'role'},
                    {text: 'data', value: 'date'},
                    {text: 'veprimi', value: 'action'}
                ],
                showDeleteConfirmation: false,
                showEditModal: false,
                selectedItem: {},
            }
        },
        methods: {
            showEdit(item) {
                this.showEditModal = true;
                this.selectedItem = item
            },
            showDeleteModal(item) {
                this.selectedItem = item;
                this.showDeleteConfirmation = true;
            },
            saveUser() {
                console.log(this.selectedItem);
                this.$store.dispatch('editUser', {id: this.selectedItem._id, role: this.selectedItem.role});
                // this.$store.dispatch('getAllUsers');
                this.selectedItem = {};
                this.showEditModal = false;
                this.$router.push({});
            },
            deleteUser() {
                this.$store.dispatch('deleteUser', this.selectedItem._id)
                    .then(value => {
                        this.$toasted.show('Useri u fshi me sukses', {duration: 2000, position: "top-center"});
                        this.$store.dispatch('getAllUsers');
                        this.selectedItem = {};
                        this.showDeleteConfirmation = false
                    })
                    .catch(reason => {
                        this.$toasted.error('Useri nuk u fshi', {duration: 2000, position: "top-center"})
                        this.selectedItem = {};
                        this.showDeleteConfirmation = false
                    });
            },
        },
        created() {
            this.$store.dispatch('getAllUsers')
                .then(value => {
                    console.log('value', value)
                })
                .catch(reason => console.log(reason));
        }
    }
</script>

<style scoped>

</style>
