<template>
    <div>
        <a @click="openConfig()">
            <v-icon small class="">fas fa-cog</v-icon>
        </a>
        <b-modal v-model="modalShow" size="lg" :hide-footer="true">
            <template v-slot:modal-header>
                <v-tabs v-model="tab">
                    <v-tab>Config</v-tab>
                    <v-tab>Security</v-tab>
                </v-tabs>
                <button type="button" class="close" aria-label="Close" @click="modalShow = !modalShow">
                    <span aria-hidden="true">&times;</span>
                </button>
            </template>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="nav-config">Navbar Config</label>
                                    <select class="form-control" id="nav-config" v-model="navbar">
                                        <option value="sticky">sticky</option>
                                        <option value="fixed">fixed</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="nav-color">Navbar Color</label>
                                <select class="form-control" id="nav-color" v-model="navcolor">
                                    <option value="white">white</option>
                                    <option value="yellow">yellow</option>
                                    <option value="red">red</option>
                                    <option value="primary">primary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-md-end mr-3">
                        <b-button size="sm" variant="outline-danger" @click="modalShow = !modalShow">
                            Mbylle
                        </b-button>
                        <b-button size="sm" variant="outline-primary" @click="saveConfig()">
                            Ruaj
                        </b-button>
                    </div>
                </v-tab-item>
                <v-tab-item>
                    <div class="container">
                        <div class="col-md-6 offset-3">
                            <div class="row d-flex justify-content-center mb-3">
                                <h6>Ndrysho Pw</h6>
                            </div>
                            <form>
                                <div class="form-group">
                                    <label for="password">Current Password</label>
                                    <input class="form-control" type="password" id="password" v-model="password"
                                           required>
                                </div>
                                <div class="form-group">
                                    <label for="newPassword">New Password</label>
                                    <input type="password" id="newPassword" class="form-control" v-model="newPassword"
                                           required>
                                </div>
                                <div class="form-group">
                                    <label for="confirmNewPassword">New Password</label>
                                    <input type="password" id="confirmNewPassword" class="form-control"
                                           v-model="confirmNewPassword" required>
                                </div>
                            </form>
                            <div class="row justify-content-md-end mr-3">
                                <b-button size="sm" variant="outline-danger" @click="modalShow = !modalShow">
                                    Mbylle
                                </b-button>
                                <b-button size="sm" variant="outline-primary" @click="changePassword()">
                                    Ruaj
                                </b-button>
                            </div>
                        </div>
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "ConfigModal",
        computed: {
            // ...mapGetters({navbar: 'getNavPosition', navcolor: 'getNavColor'}),
            navbar: {
                get() {
                    return this.$store.getters.getNavPosition
                },
                set(value) {
                    this.$store.commit('setNavbarPosition', value)
                }
            },
            navcolor: {
                get() {
                    return this.$store.getters.getNavColor
                },
                set(value) {
                    this.$store.commit('setNavbarColor', value)
                }
            }
        },
        data() {
            return {
                modalShow: false,
                tab: null,
                password: '',
                newPassword: '',
                confirmNewPassword: ''
            }
        },
        methods: {
            openConfig() {
                this.modalShow = true
            },
            saveConfig() {
                this.$store.dispatch('setNavPosition', this.navbar);
                this.$store.dispatch('setNavColor', this.navcolor);
                this.$store.dispatch('updateUserConfig', {navcolor: this.navcolor, navbarPosition: this.navbar});
                this.modalShow = false;
            },
            changePassword(){
                console.log('test');
                if (this.password === '' || this.newPassword === '' || this.confirmNewPassword === ''){
                    this.$toasted.error('Mbushi te gjitha fushat', {position: "top-center", duration: 2000});
                }else if(this.newPassword !== this.confirmNewPassword){
                    this.$toasted.error('Konfirmo mire passwordin', {position: "top-center", duration: 2000});
                }else {
                    this.$store.dispatch('changePassword', {password: this.password, newPassword: this.newPassword})
                        .then(value => {
                            this.modalShow = false;
                            this.password = '';
                            this.newPassword = '';
                            this.confirmNewPassword = '';
                            this.$toasted.show('Pw u ndryshua me sukses', {position: "top-center", duration: 2000});
                        })
                        .catch(reason => {
                            this.password = '';
                            this.newPassword = '';
                            this.confirmNewPassword = '';
                            this.$toasted.error(reason.msg, {duration: 2000, position: "top-center"})
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>
