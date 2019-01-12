<template>
    <v-ons-page>
        <div id="login">
            <form class="login_form" @submit.prevent="login()">
                <div>
                    <label for="username">Email</label>
                    <input id="username" name="username" type="text" v-model="credentials.username">
                </div>

                <div>
                    <label for="password">Mot de passe</label>
                    <input id="password" name="password" type="password" v-model="credentials.password">
                </div>

                <button type="submit">Connexion</button>
            </form>
            <v-facebook-login app-id="966242223397117"></v-facebook-login>

            <router-link :to="{name : 'RegisterNav'}">
                <div class="center">Créer un compte</div>
            </router-link>
        </div>
    </v-ons-page>
</template>

<script>
    import VFacebookLogin from 'vue-facebook-login-component';

    export default {
        components: {
            VFacebookLogin
        },
        name: 'login',
        data() {
            return {
                credentials: {
                    username: null,
                    password: null,
                },
            };
        },
        methods: {
            async login() {
                try {
                    const reponse = await this.$store.dispatch('login', this.credentials);
                    console.log(reponse);
                    this.$router.replace({name: 'Accueil'});
                } catch (error) {
                    //  Something went wrong. What the heck?
                    if (error.response) {
                        if (error.response.status === 400) {
                            console.log(error.response.data);
                        }
                    } else {
                        // une erreur dans le front ?
                    }
                }
            },
        },
    };
</script>

<style scoped>

</style>
