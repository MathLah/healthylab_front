<template>

    <v-ons-page>
        <v-ons-card class="bloc-accueil">
            Votre journal
        </v-ons-card>
        <v-ons-card class="bloc-accueil">
            Les recettes
        </v-ons-card>
        <v-ons-card class="bloc-accueil">
            Commander vos repas
        </v-ons-card>
        <v-ons-card class="">
            <h3>Nos offres premium</h3>
            <p>Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc ludibriis ignaviae torpentis exundant</p>
            <p>vocali sonu, perflabili tinnitu fidium resultantes. denique pro philosopho cantor et in locum oratoris doctor artium ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum clausis organa fabricantur hydraulica, et lyrae ad speciem carpentorum ingentes tibiaeque et histrionici gestus instrumenta non levia.</p>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import store from '../store';

    export default {
        name: 'accueil',
        data() {
            return {};
        },
        async beforeRouteEnter(to, from, next) {
            store.commit('changeTitle', 'Bienvenue');
            try {
                await store.dispatch('getInfosComplete');
            } catch (err) {
                if (err.reponse) {
                    console.error(err);
                }
                console.error(err);
            }
            next();
        },
        computed: {
        },
    };
</script>

<style lang="scss">
    .bloc-accueil {
        height: 33%;
    }
</style>
