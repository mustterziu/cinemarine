<template>
  <div>
    <Banner></Banner>
    <HomeNavbar></HomeNavbar>
    <OfertatComponent></OfertatComponent>
    <SignUpModal></SignUpModal>
    <LoginModal></LoginModal>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "./home/Banner";
import HomeNavbar from "./home/HomeNavbar";
import OfertatComponent from "./home/OfertatComponent";
import SignUpModal from "../components/SignUpModal";
import LoginModal from "../components/LoginModal";


export default {
  name: 'home',
  components: {LoginModal, SignUpModal, HomeNavbar, Banner, OfertatComponent},
}
</script>
