<template>
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
    </div>
</template>

<script>
    export default {
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
