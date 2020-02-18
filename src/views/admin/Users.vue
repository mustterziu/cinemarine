<template>
    <div class="container">
        <v-data-table :headers="headers" :items="users" i>
            <template v-slot:top>

            </template>

            <template v-slot:item.action="{ item }">
                <v-icon small class="mr-3">fas fa-eye</v-icon>

                <a href="#">
                    <v-icon small class="mr-3 ms-icon">fas fa-trash</v-icon>
                </a>
            </template>

        </v-data-table>
    </div>
    
</template>

<script>
    export default {
        name: "Users",
        computed: {

        },
        data() {
            return{
                headers: [
                    {text: 'username', value: 'username'},
                    {text: 'email', value: 'email'},
                    {text: 'roli', value: 'role'},
                    {text: 'data', value: 'date'},
                    {text: 'veprimi', value: 'action'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
