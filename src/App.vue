<template>
  <v-app>
<!--    <div class="container">-->
      <loading ref="loader" :active.sync="isLoading"></loading>
      <header-component></header-component>
      <router-view/>
      <footer-component></footer-component>
<!--    </div>-->
  </v-app>
</template>

<style>

</style>
<script>
    import {mapGetters} from 'vuex';
export default {

  name: 'App',
    computed:{
      ...mapGetters({'isLoading': "isLoading"})
    },
    created() {
      this.$store.dispatch('tryLogin');
    }
}
</script>
