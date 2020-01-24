<template>
    <div>
    <b-card img-src="img/latestmovies/got1.jpg" img-alt="Card image" img-left class="mt-3">
        <b-card-text class="row">
            <div class="col-md-6">
                <h4>Game Of Thrones</h4>
                <p>Fantasy</p>
                <button type="button" class="btn btn-success mt-5">Shiko Detajet  <font-awesome-icon :icon="['fa', 'mouse']" /></button>
            </div>
            <div class="col-md-6">
                12:30 (Salla UBT-PZ)  <font-awesome-icon :icon="['fa', 'check-circle']" />
                16:15 (Salla UBT-PR)  <font-awesome-icon :icon="['fa', 'times-circle']" />
                18:20 (Salla UBT-FR) <font-awesome-icon :icon="['fa', 'check-circle']" />
            </div>

        </b-card-text>
    </b-card>
</div>

</template>

<script>
    export default {
        name: "ProgramiComponent"
    }
</script>

<style scoped>

</style>
