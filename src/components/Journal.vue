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
        <div>
            <div>
                <div>{{ profilComplet.basal_metabolic_rate }} KCAL conseillées</div>
                <div>{{ caloriesRestantes }} KCAL restantes</div>
                <div>{{ caloriesBrulees }} KCAL brulées</div>
                <div>Il vous reste {{ restePoidsAPerdre }}kg à perdre</div>
                <v-ons-progress-circular class="kcal-restant" value="40" secondary-value="80"></v-ons-progress-circular>
            </div>
            <div>
                <span v-for="jour in getJourSemaine">{{ jour | shortDate }}</span>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
    import store from '../store';

    export default {
        name: 'journal',
        inject: ['navigator'],
        data() {
            return {};
        },
        async beforeRouteEnter(to, from, next) {
            store.commit('changeTitle', 'Journal');
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
        methods: {},
        computed: {
            title() {
                return 'Journal';
            },
            profilComplet() {
                return this.$store.getters.profilComplet;
            },
            getJourSemaine() {
                const jourSemaine = [];
                // On recupere le Lundi de cette semaine
                const lundi = new Date();
                lundi.setDate(lundi.getDate() + (1 - lundi.getDay()));

                // on alimente un tableau avec tout les jours de cette semaine
                for (let i = 0; i < 7; i += 1) {
                    const jour = new Date();
                    jour.setDate(lundi.getDate() + i);
                    jourSemaine.push(jour);
                }
                return jourSemaine;
            },
            restePoidsAPerdre() {
                // Poids actuel - poids souhaité
                // TODO : voir changement sur une prise de poids
                return this.profilComplet.weight - this.profilComplet.objective_weight;
            },
            caloriesBrulees() {
                // TODO : somme activité
                return this.$store.getters.caloriesActivites;
            },
            caloriesRestantes() {
                // TODO : Somme KCAL base + calories brulée - repas
                let caloriesRestantes = this.profilComplet.basal_metabolic_rate;
                caloriesRestantes += this.caloriesBrulees;
                caloriesRestantes -= this.$store.getters.caloriesRepasConsommes;
                return caloriesRestantes;
            },
        },
    };
</script>

<style lang="scss">
.kcal-restant {
    width: 150px;
    height: 150px;
}
</style>
