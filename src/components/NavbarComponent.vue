<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link to="/#" class="nav-item nav-link" active-class="active">Home</router-link>
                <router-link to="/about" class="nav-item nav-link" active-class="active">About</router-link>
                <router-link to="/features" class="nav-item nav-link" active-class="active">Features</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavbarComponent"
    }
</script>

<style scoped>

</style>
