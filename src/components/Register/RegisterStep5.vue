<template>
    <v-ons-page>
        <v-ons-toolbar class="toolbar primary">
            <div class="left">
                <v-ons-back-button>Back</v-ons-back-button>
            </div>

            <div class="center">
                <span class="title">{{title}}</span>
            </div>

            <div class="right">
            </div>
        </v-ons-toolbar>
        Vos salles de sports
        <v-ons-list>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Ville" float v-model="ville">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Nom de la salle" float v-model="salle">
                    </v-ons-input>
                </div>
            </v-ons-list-item>

            <v-ons-list-item>
                <v-ons-button style="margin: 6px 0" v-on:click="ajouterSalle">Ajouter</v-ons-button>
            </v-ons-list-item>

            <v-ons-list-item v-for="(s, $index) in salles" :key="s.nom" tappable>
                <label class="left">
                    {{ s.nom }} - {{ s.ville }}
                </label>
                <label :for="'radio-' + $index" class="center">
                    {{ type }}
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <v-ons-button style="margin: 6px 0" v-on:click="next">Terminer</v-ons-button>
            </v-ons-list-item>
        </v-ons-list>

    </v-ons-page>
</template>

<script>
    export default {
        name: 'register-step-5',
        inject: ['navigator'],
        data() {
            return {
                salles:[],
                ville: '',
                salle: ''
            };
        },
        computed: {
            title() {
                return 'Register Step 5';
            }
        },
        methods: {
            ajouterSalle() {
                console.log({'ville' : this.ville, 'salle': this.salle});
                this.salles.push[{'ville' : this.ville, 'salle': this.salle}];
            },
            next() {
                this.$router.replace({name: 'Accueil'});
            },
        }
    };
</script>

<style scoped>

</style>
