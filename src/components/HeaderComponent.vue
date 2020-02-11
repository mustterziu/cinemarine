<template>
    <header class="header-global">
        <nav id="navbar-main" class="navbar  fixed-top  navbar-main navbar-expand-lg navbar-white bg-white">
            <div class="container">
                <router-link to="/#" class="navbar-brand mr-lg-5">
                    <img src="img/logo.png">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                        aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbar_global">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-close">
                                <button type="button" class="navbar-toggler" data-toggle="collapse"
                                        data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                        <li class="nav-item">
                            <router-link to="/#" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Kryefaqja</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/programi" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Programi</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/kontakti" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Kontakti</span>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li v-if="!isAuthenticated" class="nav-item  d-lg-block ml-lg-4">
                            <login-modal></login-modal>
                        </li>
                        <li v-if="!isAuthenticated" class="nav-item">
                            <sign-up-modal></sign-up-modal>
                        </li>

                        <li v-if="isAdmin" class="nav-item btn btn-sm btn-outline-info">
                            <router-link to="/admin">
                                <span class="nav-link-inner--text">Dashboard</span>
                            </router-link>
                        </li>

                        <li v-if="isAuthenticated" class="nav-item d-lg-block ml-lg-4">
                            <span class="nav-link-inner--text">{{user.username}}</span>
                        </li>

                        <li v-if="isAuthenticated" class="nav-item d-lg-block ml-lg-4">
                            <a title="Logout" class="btn btn-link btn-sm" @click="logout()">
                                <span class="nav-link-inner--text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>

</style>

<script>
    import router from "../router";
    import LoginModal from "./auth/LoginModal";
    import SignUpModal from "./auth/SignUpModal";
    import {mapGetters} from 'vuex';

    export default {
        components: {SignUpModal, LoginModal},
        computed: {
            ...mapGetters({
                isAuthenticated: 'isAuthenticated',
                isAdmin: 'isAdmin',
                user: 'user'
            }),
        },
        data() {
            return {
                search: String
            }
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout');
                this.$router.push('/');
            }
        }
    }
</script>
