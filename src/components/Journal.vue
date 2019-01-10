<template>
    <div>
        <div>
            <div>{{ profilComplet.basal_metabolic_rate }} KCAL conseillées</div>
            <div>{{ caloriesRestantes }} KCAL restantes</div>
            <div>{{ caloriesBrulees }} KCAL brulées</div>
            <div>Il vous reste {{ restePoidsAPerdre }}kg à perdre</div>
        </div>
        <div>
            <span v-for="jour in getJourSemaine">{{ jour | shortDate }}</span>
        </div>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        name: 'accueil',
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
        computed: {
            profilComplet() {
                console.log(this.$store.getters.profilComplet);
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

</style>
