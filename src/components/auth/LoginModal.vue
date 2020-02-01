<template>
    <div class="col-md-4">
        <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form"
             aria-hidden="true"
             ref="loginModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" role="document" ref="loginModal">
                <div class="modal-content">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Kycu!</small>
                        </div>
                        <form role="form">
                            <div class="form-group mb-3">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <font-awesome-icon :icon="['fa', 'user']"/>
                                            </span>
                                    </div>
                                    <input class="form-control" placeholder="Perdoruesi" v-model="username">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <font-awesome-icon
                                                :icon="['fa', 'key']"/></span>
                                    </div>
                                    <input class="form-control" placeholder="Password" type="password" v-model="password">
                                </div>
                            </div>
                            <div class="custom-control custom-control-alternative custom-checkbox">
                                <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                                <label class="custom-control-label" for=" customCheckLogin">
                                    <span>Me kujto?</span>
                                </label>
                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary my-4" @click="login()">Kycu</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            username: '',
            password: ''
        }),
        name: "LoginModal",
        methods: {
            login: function () {
                this.$http.post('/user/login', {
                    'username': this.username,
                    'password': this.password
                }).then(value => {
                    console.log(value);
                    this.$store.state.user.isLoggedIn = true;
                    this.$store.state.user.token = value.data.token;
                    this.$store.state.user.username = this.username;
                }).catch(reason => {
                    console.log(reason, reason.response);
                });
            }
        }
    }
</script>

<style scoped>

</style>
