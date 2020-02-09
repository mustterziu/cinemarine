<template>
  <div>
    <Banner></Banner>
    <HomeNavbar></HomeNavbar>
    <OfertatComponent></OfertatComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "./home/Banner";
import HomeNavbar from "./home/HomeNavbar";
import OfertatComponent from "./home/OfertatComponent";

export default {
  name: 'home',
  components: {HomeNavbar, Banner, OfertatComponent},
}
</script>
