<template>
    <v-ons-page>
        <v-ons-toolbar class="toolbar primary">
            <div class="left">
                <v-ons-toolbar-button v-if="this.$parent.pageStack.length <= 1" id="menuButton" icon="ion-navicon, material: md-menu" v-on:click="toggleMenu"></v-ons-toolbar-button>
                <v-ons-back-button v-if="this.$parent.pageStack.length > 1">Back</v-ons-back-button>
            </div>

            <div class="center">
                <v-ons-icon class="logo"></v-ons-icon>
                <span class="title">{{title}}</span>
            </div>

            <div class="right">
            </div>
        </v-ons-toolbar>
        <v-ons-card class="bloc-accueil" v-on:click="navigateToJournal">
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
            <p>vocali sonu, perflabili tinnitu fidium resultantes. denique pro philosopho cantor et in locum oratoris doctor artium ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum
                clausis organa fabricantur hydraulica, et lyrae ad speciem carpentorum ingentes tibiaeque et histrionici gestus instrumenta non levia.</p>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import store from '../store';

    export default {
        name: 'accueil',
        inject: ['navigator'],
        data() {
            return {
            };
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
            title() {
                return 'Accueil';
            }
        },
        methods: {
            navigateToJournal() {
                const matched = this.$router.matcher.match('Journal').matched.pop();
                this.$emit('push-page', matched.components.default);
            },
            toggleMenu() {
                console.log(this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.openSide);
                this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.openSide = true;
            },
        }
    };
</script>

<style lang="scss">
    .bloc-accueil {
        height: 33%;
    }
</style>
