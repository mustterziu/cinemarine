<template>
    <div class="abouta">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="col-lg-12 text-center mb-lg-lg">
                        <h2 class="display-2"><span>Kontakti</span></h2>
                        <p class="lead">
                            Keni pyetje shtese?! Ndihuni te lire te na shkruani!
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="feature-description">
                        <div class="d-flex px-3">
                            <div>
                                <h3 class="text-success">Adresa </h3>

                                <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                                <b>CINEMARINE Prizren</b>
                                <p>
                                    Rr. Tirana, P.n. Prizren<br>
                                    Abi Çarshia
                                </p>
                            </div>
                        </div>

                        <div class="d-flex px-3">
                            <div>
                                <h3 class="text-success">Menyrat Tjera </h3>

                                <b>
                                    <font-awesome-icon :icon="['fas', 'phone']"/>
                                    Telefoni <br></b>
                                +383 (0) 49 xxx xxx<br>
                                +383 (0) 45 xxx xxx<br>
                                +383 (0) 44 xxx xxx<br>
                                <br>
                                <b>
                                    <font-awesome-icon :icon="['fa', 'envelope']"/>
                                    Email <br></b>
                                mustafa@cinemarine-eu.com<br>
                                urim@cinemarine-eu.com<br>
                                mefail@cinemarine-eu.com<br>


                                <p></p>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="offset-xl-1 col-xl-5 offset-lg-1 col-lg-7 offset-md-1 col-md-7 col-sm-12 col-12">
                    <form method="post">
                        <div class="service-form">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10 ">
                                    <h3 class="text-success">Na shkruani!</h3>
                                </div>

                                <div class="form-group col-lg-12">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-user-circle-o"></i></span>
                                        </div>
                                        <input placeholder="Emri dhe Mbiemri" id="name" type="text"
                                               class="form-control " name="name" value="" required="" v-model="name">

                                    </div>

                                </div>

                                <div class="form-group col-lg-12">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input placeholder="Posta elektronike(Email)" type="email" class="form-control"
                                               name="email" v-model="email">
                                    </div>

                                </div>

                                <div class="form-group col-lg-12">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input placeholder="Numri Telefonit" id="phone" type="text"
                                               class="form-control " name="phone" v-model="phone">

                                    </div>

                                </div>

<!--                                <div class="form-group col-lg-12">-->
<!--                                    <input type="file" id="file" ref="file" v-on:change="readImg" accept="image/*">-->
<!--                                </div>-->
<!--                                <div class="form-group col-lg-12">-->
<!--                                    <button type="button" class="btn btn-outline-dark" @click="dlimg()">Image</button>-->
<!--                                    <img v-if="img != null" :src="img" alt="">-->
<!--                                </div>-->

                                <div class="form-group col-lg-12">

                                    <textarea id="message" placeholder="Mesazhi juaj..."
                                              class="form-control form-control-alternative " name="message"
                                              v-model="message"></textarea>
                                </div>

                                <div class="form-group col-lg-12">
                                    <button type="button" class="btn btn-default mb10" value="DERGO"
                                            @click="send()">Dergo
                                    </button>
                                    <p>
                                        <small>*Ekipi yne do te mundohet qe sa me pare tju kthehet me pergjigje!</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- /.service-form -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "AboutUsComponent",
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                message: '',
                image: null,
                img: null,
            }
        },
        methods: {
            dlimg: function () {
                this.$http.get('contact/img')
                    .then(value => {
                        console.log(value.data);
                        let base64 = new Buffer(value.data.image.data, 'binary').toString('base64');
                        console.log(base64);
                        this.img = `data:${value.data.mimeType};base64,${base64}`
                    })
                    .catch(reason => console.log(reason));
            },
            readImg: function () {
                this.image = this.$refs.file.files[0]
            },
            testImage: function () {
                let formData = new FormData();
                formData.append('img', this.image);
                formData.append('title', this.name);
                this.$http.post('contact/img', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(value => {
                    console.log(value);
                }).catch(reason => console.log(reason));

            },
            send: function () {
                this.$store.dispatch('postMessage', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                }).then(value => {
                    if (value != null) {
                        console.log('msg component value', value);
                        this.$toasted.show(value.data.msg, {
                            theme: "outline",
                            position: "top-center",
                            duration: 5000
                        });
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                    }
                }).catch(reason => {
                    console.log('msg component error', reason);
                    this.$toasted.show(reason.response.data, {
                        theme: "bubble",
                        position: "top-center",
                        duration: 5000,
                        closeOnSwipe: true
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .abouta {
        margin-top: 120px;
    }

</style>
