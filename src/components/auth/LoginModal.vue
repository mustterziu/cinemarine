<template>
    <div>
        <a title="Login" class="btn btn-link btn-sm" @click="modalShow = !modalShow">
            <span class="nav-link-inner--text">Kyçu</span>
        </a>

        <b-modal v-model="modalShow" size="sm" :hide-header="true" :hide-footer="true">
            <div class="text-center text-muted mb-4">
                <small>Kycu!</small>
            </div>
            <form role="form">
                <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <font-awesome-icon :icon="['fa', 'user']"/>
                            </span>
                        </div>
                        <label for="username"></label>
                        <input id="username" class="form-control" placeholder="Perdoruesi" v-model="username">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <font-awesome-icon :icon="['fa', 'key']"/>
                            </span>
                        </div>
                        <label for="password"></label>
                        <input id="password" class="form-control" placeholder="Password" type="password" v-model="password">
                    </div>
                </div>
                <span class="text-danger text-center" v-if="msg !== null">
                    {{msg}}
                </span>
                <div class="text-center">
                    <button type="button" class="btn btn-primary my-4" @click="login()">Kycu</button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters({msg: 'getMessage'})
        },
        name: "LoginModal",
        data() {
            return {
                modalShow: false,
                username: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                this.$store.dispatch('login', {username: this.username, password: this.password})
                    .then(value => {
                        console.log('from modal',value.response);
                        this.$toasted.show('Kycja u bo me sukses', {position: "top-center", duration: 1000});
                    })
                    .catch(reason => console.log(reason))
            }
        }
    }
</script>

<style scoped>

</style>
