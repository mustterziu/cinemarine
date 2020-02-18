<template>
    <swiper :options="swiperOption" class="swipper">
        <swiper-slide v-for="slide in slides" class="d-flex justify-content-center"><img :src="'img/'+slide.image" class="img-banner"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: "Banner",
        data: () => ({
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
            },
            slides: [
                {
                    image: 'slider1.jpg',
                    link: '/programi'
                },
                {
                    image: 'slider2.jpg',
                    link: '/programi'
                },
                {
                    image: 'slider3.jpg',
                    link: '/programi'
                }
            ]
        })
    }
</script>

<style scoped>
    .img-banner{
        height: 300px;
    }
    .swipper{
        margin-top: 50px;
    }

</style>
