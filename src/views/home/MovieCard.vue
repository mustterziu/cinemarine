<template>
    <div class="d-block mb-2">
        <div class="card">
            <div class="img-container">
                <img class="card-img-top" :src="image">
                <div class="overlay"></div>
                <div class="button">
                    <router-link :to="{name: 'details', params: { id: id}}">Shiko
                        Detajet
                    </router-link>
                </div>
            </div>
            <div class="card-block">
                <h5 class="card-title">{{title}}</h5>
                <div class="card-text">
                    {{description}}
                </div>
            </div>
            <div class="card-footer">
                <span v-for="genre in genres" class="badge badge-primary mr-2">{{genre}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieCard",
        props: {
            id: {required: true, type: String},
            title: {required: true, type:String},
            description: {required: false, type: String},
            genres: {required: false, type: Array},
            image: {required: true, type: String}
            },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    html {
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    h5 {
        font-size: 1.28571429em;
        font-weight: 700;
        line-height: 1.2857em;
        margin: 0;
    }

    .card {
        min-width: 300px;
        max-width: 300px;
        font-size: 1em;
        overflow: hidden;
        padding: 0;
        border: none;
        border-radius: .28571429rem;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    }

    .card-block {
        font-size: 1em;
        position: relative;
        margin: 0;
        padding: 1em;
        border: none;
        border-top: 1px solid rgba(34, 36, 38, .1);
        box-shadow: none;
        max-height: 250px;
    }

    .card-img-top {
        display: block;
        width: 100%;
        height: 200px;
    }

    .card-title {
        font-size: 1.28571429em;
        font-weight: 700;
        line-height: 1.2857em;
    }

    .card-text {
        clear: both;
        margin-top: .5em;
        color: rgba(0, 0, 0, .68);
    }

    .card-footer {
        font-size: 1em;
        position: static;
        top: 0;
        left: 0;
        max-width: 100%;
        padding: .75em 1em;
        color: rgba(0, 0, 0, .4);
        border-top: 1px solid rgba(0, 0, 0, .05) !important;
        background: #fff;
    }

    img{
        height: 100%;
        width: 100%;
    }
    .card-text {
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 2.4em;
        text-align: justify;
        margin-right: -1em;
        padding-right: 1em;
    }
    .card-text:before {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .card-text:after {
        content: '';
        position: absolute;
        right: 0;
        width: 1em;
        height: 1em;
        margin-top: 0.2em;
        background: white;
    }
    .img-container{
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
        height: 100%;
        width: 100%;
        display: block;
        background: rgba(0, 0, 0, .3);
    }

    .button {
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
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
