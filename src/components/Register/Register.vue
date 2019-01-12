<template>
    <v-ons-page>
        <v-ons-toolbar class="toolbar primary">
            <div class="left">
                <a v-on:click="back">Retour</a>
            </div>

            <div class="center">
                <span class="title">{{title}}</span>
            </div>
        </v-ons-toolbar>

        <v-ons-list>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Identifiant" float v-model="login">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Email" float v-model="email">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Mot de passe" float v-model="password">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Confirmer le mot de passe" float v-model="confirmPassword">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <v-ons-button style="margin: 6px 0" v-on:click="next">Suivant</v-ons-button>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
    export default {
        name: 'register',
        inject: ['navigator'],
        data() {
            return {
                login: '',
                email: '',
                password: '',
                confirmPassword: '',
            };
        },
        computed: {
            title() {
                return 'Register';
            }
        },
        methods: {
            next() {
                const matched = this.$router.matcher.match('/register/1').matched.pop();
                console.log(matched);
                this.$emit('push-page', matched.components.default);
            },
            back() {
                this.$router.replace({name: 'Login'});
            },
        }
    };
</script>

<style scoped>

</style>
