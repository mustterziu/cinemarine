<template>
  <div>
    <Banner></Banner>
    <HomeNavbar></HomeNavbar>

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "./home/Banner";
import HomeNavbar from "./home/HomeNavbar";


export default {
  name: 'home',
  components: {HomeNavbar, Banner},
}
</script>
