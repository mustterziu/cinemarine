<template>
    <div class="container--fluid margin-120" >
        <v-card height="600px">
            <v-toolbar flat color="primary">
                <v-toolbar-title>Dashboard</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    <v-icon left>mdi-account</v-icon>
                    Filmat
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-lock</v-icon>
                    Ofertat
                </v-tab>
                <v-tab>
                    <v-icon left>mdi-access-point</v-icon>
                    Mesazhet
                </v-tab>

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
        components: {Messages, Offers, Movies}
    }
</script>

<style scoped>
    .margin-120 {
        margin-top: 120px;
    }
</style>
