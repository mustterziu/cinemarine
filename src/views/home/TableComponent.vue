<template>
    <div class="container">
    <div class="card-deck">
        <div class="card">
            <img class="card-img-top" src="img/pricing/adult.jpg" alt="Per Te Rritur">
            <div class="card-body">
                <h5 class="card-title">Gjate Javes</h5>
                <p class="price-message">E Hene,E Merkure,E Enjte</p>
                <p class="card-text">Per Person <font-awesome-icon :icon="['fa', 'user']"/>  3 &euro;</p>
                <hr class="line">
                <p class="card-text">Per Grupe <font-awesome-icon :icon="['fa', 'users']" /> 2.50 &euro;</p><hr class="line">
                <p class="card-text">Per Studente <font-awesome-icon :icon="['fa', 'user-graduate']" /> 2.50 &euro;</p><hr class="last-line">
                <p class="card-text"><small class="text-muted">*Zbritjet nuk vlejne ne premiera!</small></p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="img/pricing/camera.jpg" alt="Femije">
            <div class="card-body">
                <h5 class="card-title">Fundjave</h5>
                <p class="price-message">E Premte,E Shtune,E Diel</p>
                <p class="card-text">Per Person <font-awesome-icon :icon="['fa', 'user']"/>  3.50 &euro;</p>
                <hr class="line">
                <p class="card-text">Per Grupe <font-awesome-icon :icon="['fa', 'users']" /> 3 &euro;</p><hr class="line">
                <p class="card-text">Per Studente <font-awesome-icon :icon="['fa', 'user-graduate']" /> 3 &euro;</p><hr class="last-line">
                <p class="card-text"><small class="text-muted">*Zbritjet nuk vlejne ne premiera!</small></p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="img/pricing/group.jpg" alt="Grupe">
            <div class="card-body">
                <h5 class="card-title">Dita e Kinemase</h5>
                <p class="price-message">E Marte</p>
                <p class="card-text">Per Person <font-awesome-icon :icon="['fa', 'user']"/>  2.50 &euro;</p>
                <hr class="line">
                <p class="card-text">Per Grupe <font-awesome-icon :icon="['fa', 'users']" /> 2.50 &euro;</p><hr class="line">
                <p class="card-text">Per Studente <font-awesome-icon :icon="['fa', 'user-graduate']" /> 2.50 &euro;</p><hr class="last-line">
                <p class="card-text"><small class="text-muted">*Zbritjet nuk vlejne ne premiera!</small></p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import  {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {faUser} from '@fortawesome/free-solid-svg-icons';
    import { library } from '@fortawesome/fontawesome-svg-core'


    export default {
        name: "TableComponent",
        components: {FontAwesomeIcon}
    }
</script>

<style scoped>

    .card-title{
        text-align: center;
    }

    .card-text{
        text-align: center;
    }

    .price-message{
        font-size: 13px;
        text-align: center;
        font-style: italic;
    }
    .line{
        margin: 1px 1px 1px 1px;
        height: 30px;
        border-style: solid;
        border-color: black;
        border-width: 1px 0 0 0;
        border-radius: 10px;
    }
    .line:before{
        display: block;
        content: "";
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
        border-radius: 10px;
    }
    .last-line{
        border: 2;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
</style>