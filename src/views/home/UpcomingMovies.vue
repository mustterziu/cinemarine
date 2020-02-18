<template>
    <div class="container--fluid">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in movies">
                <div class="container">
                    <div class="row flex-column-reverse flex-md-row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header mb-4">
                                    <div class="img-container">
                                        <img class="card-img" :src="getBaseImg(item.image)" alt="Card image">
                                        <div class="overlay"></div>
                                        <div class="button">
                                            <router-link :to="{name: 'details', params: { id: item._id}}">Shiko
                                                Detajet
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title">{{item.title}}</h2>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-8 metadata"><span v-for="genre in item.genres"
                                                                              class="badge badge-primary mr-2">{{genre}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--                                    <p class="card-text">{{item.description}}</p>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "UpcomingMovies",
        computed: {
            ...mapGetters({movies: "upcomingMovies"})
        },
        data() {
            return {
                type: '',
                swiperOption: {
                    centeredSlidesBounds: true,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        765: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 'auto'
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },

            }
        },

        methods: {
            getBaseImg(item) {
                let base64 = new Buffer(item.data, 'binary').toString('base64');
                return `data:${item.data.mimeType};base64,${base64}`;
            },
        },
        created() {
            this.$store.dispatch('getUpcomingMovies').then(value => {
                this.$store.commit('setLoading', false);
            });
        },
    };
</script>

<style scoped>
    .container--fluid{
        max-height: 450px;
    }

    .card-img{
        width: 400px;
        height: 400px;
    }
    .card-header,
    .metadata {
        background: none;
        padding: 0;
        position: relative;
        border-style: none;
    }

    .metadata {
        font-size: 16px;
    }

    .metadata i,
    .metadata p {
        float: left;
    }

    .metadata p {
        margin-top: 0;
        margin-left: 10px;
    }

    .metadata i {
        color: #ff9d00;
        margin-top: 5px;
        margin-left: 1px;
    }

    .card-body {
        position: relative;
        color: #9fa7a9;
    }

    .card-body .card-title {
        font-weight: 400;
        color: #414345;
    }

    .card-body .card-text {
        margin-top: 8px;
        font-weight: 400;
        line-height: 30px;
    }

    .card {
        border-radius: 8pt;
        border-style: none;
        overflow: hidden;
        transform: scale(0.8);
        margin-top: -60px;
    }

    .trailer-preview i {
        margin-left: 5px;
    }

    .img-container {
        width: 400px;
        position: relative;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        transition: background 0.5s ease;
    }

    .img-container:hover .overlay {
        width: 400px;
        display: block;
        background: rgba(0, 0, 0, .3);
    }

    img {
        position: relative;
        left: 0;
    }

    .button {
        position: absolute;
        width: 100%;
        left: 0;
        top: 180px;
        text-align: center;
        opacity: 0;
        transition: opacity .35s ease;
    }

    .button a {
        width: 200px;
        padding: 12px 48px;
        text-align: center;
        color: white;
        border: solid 2px white;
        z-index: 1;
    }

    .img-container:hover .button {
        opacity: 1;
    }
</style>
