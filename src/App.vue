<template>
  <v-app>
<!--    <div class="container">-->
      <header-component></header-component>
      <router-view/>
      <footer-component></footer-component>
<!--    </div>-->
  </v-app>
</template>

<style>

</style>
<script>
export default {
  name: 'App',
    created() {
      this.$store.dispatch('tryLogin');
    }

}
</script>
