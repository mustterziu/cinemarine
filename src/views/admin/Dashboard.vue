<template>
    <div class="container--fluid margin-120" >
        <v-card>
            <v-toolbar flat color="primary">
                <v-toolbar-title>Dashboard</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    <v-icon left>mdi-account</v-icon>
                    Test
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-movie-filter</v-icon>
                    Filmat
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-account</v-icon>
                    Users
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-access-point</v-icon>
                    Mesazhet
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                        <p>Admin Dashboard</p>
                        <button @click="startLoader()">click</button>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <Movies></Movies>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <Offers></Offers>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <Messages></Messages>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    import Movies from "./Movies";
    import Offers from "./Offers";
    import Messages from "./Messages";
    export default {
        name: "Dashboard",
        components: {Messages, Offers, Movies},
        methods: {
          startLoader(){
              this.$store.commit('setLoading', true);
              setTimeout( () => {
                  this.$store.commit('setLoading', false);
              }, 2000)
          }
        },
        created() {
            this.$store.commit('setLoading', false);
        }
    }
</script>

<style scoped>
    .margin-120 {
        margin-top: 120px;
    }
</style>
