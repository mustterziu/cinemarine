<template>
    <div>
        <a title="Regjistrohu" class="btn btn-md btn-success" @click="showModal">
            <span class="nav-link-inner--text">Regjistrohu</span>
        </a>

        <b-modal v-model="modalShow" size="sm" :hide-header=true :hide-footer=true>
            <div class="text-center text-muted mb-4">
                <small>Regjistrohu!</small>
            </div>
            <form role="form">
                <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text">   <font-awesome-icon :icon="['fa', 'user']" /></span>
                        </div>
                        <label for="username"></label>
                        <input id="username" class="form-control" placeholder="Emri i perdoruesit" type="text" v-model="username">
                    </div>
                </div>
                <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text">   <font-awesome-icon :icon="['fa', 'envelope']" /></span>
                        </div>
                        <label for="email"></label>
                        <input id="email" class="form-control" placeholder="Email" type="email" v-model="email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><font-awesome-icon :icon="['fa', 'key']" /></span>
                        </div>
                        <label for="password"></label>
                        <input id="password" class="form-control" placeholder="Password" type="password" v-model="password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><font-awesome-icon :icon="['fa', 'key']" /></span>
                        </div>
                        <label for="confirm"></label>
                        <input id="confirm" class="form-control" placeholder="Confirm Password" type="password" v-model="confirmPassword">
                    </div>
                </div>
                <span class="text-danger text-center" v-if="msg !== null">
                    {{msg}}
                </span>
                <div class="text-center">
                    <button type="button" class="btn btn-primary my-4" @click="register()">Regjistrohu</button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';
    export default {
        name: "SignUpModal",
        computed: {
            ...mapGetters({msg: 'getMessage'}),
            modalShow: {
                get(){
                    return this.$store.state.auth.showRegisterModal;
                },
                set(value){
                    this.$store.commit('updateRegisterModalState', value);
                }
            }
        },
        data() {
            return {
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            showModal: function(){
                this.$store.commit('updateRegisterModalState', true);
            },
            register: function () {
                if (this.password === '' || this.email === '' || this.username === '' || this.confirmPassword === ''){
                    this.$store.commit('setMessage', 'Mbushni te gjitha fushat');
                }else if(this.password !== this.confirmPassword){
                    this.$store.commit('setMessage', 'Konfirmo mire passwordin!');
                }else{
                    this.$store.dispatch('register', {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    }).then(value => {
                        console.log('sign up modal value',value);
                        this.modalShow = false;
                        this.$toasted.show('Llogaria u regjistrua me sukses.', {duration: 3000, position: "top-center"});
                        this.username = '';
                        this.password = '';
                        this.email = '';
                        this.confirmPassword = '';
                    }).catch(reason => {
                        console.log('sign up modal value',reason);
                    });
                }
            },
        }
    }
</script>

<style scoped>

</style>
