<template>
    <div class="container--fluid">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in movies" class="swiper">
                <MovieCard :id="item._id" :title="item.title" :description="item.description" :genres="item.genres" :image="getImageUrl(item.image)"></MovieCard>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import MovieCard from "./MovieCard";

    export default {
        name: "UpcomingMovies",
        components: {MovieCard},
        computed: {
            ...mapGetters({movies: "upcomingMovies"})
        },
        data() {
            return {
                type: '',
                swiperOption: {
                    width: '1140',
                    spaceBetween: 250,
                    slidesPerView: 4,
                    centerInsufficientSlides: true,

                    breakpoints: {
                        1140: {
                            slidesPerView: 4,
                            spaceBetween: 250,
                            centerInsufficientSlides: true,
                        },
                        765: {
                            slidesPerView: 3,
                            spaceBetween: 250,
                            centerInsufficientSlides: true
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
            getImageUrl(item) {
                return `http://localhost:4000/public/${item}`;
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
/*.swiper{*/
/*    width: 350px;*/
/*}*/
</style>
