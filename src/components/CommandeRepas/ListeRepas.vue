<template>
  <div>
    <span>
      Commandez avant 18h pour une livraison le {{ dateLivraison }} midi.
    </span>

    <v-ons-list>
      <v-ons-item v-for="repas in listeRepasCommande">
        <v-ons-card>
          <img :src="repas.image">
          <div class="title">
            {{repas.name}}
          </div>
          <div class="content">
            <div>
              <v-ons-button>
                <v-ons-icon icon="ion-thumbsup"></v-ons-icon>
              </v-ons-button>
              <v-ons-button>
                <v-ons-icon icon="ion-share"></v-ons-icon>
              </v-ons-button>
            </div>
            <v-ons-list>
              <v-ons-list-item>{{repas.energy}}</v-ons-list-item>
              <v-ons-list-item>{{repas.protein}}</v-ons-list-item>
              <v-ons-list-item>{{repas.carb}}</v-ons-list-item>
              <v-ons-list-item>{{repas.lipid}}</v-ons-list-item>
              <v-ons-list-item>{{repas.cost}}</v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-card>
      </v-ons-item>
    </v-ons-list>
  </div>
</template>

<script>
  export default {
    name : 'liste-repas',
    data() {
      return {
        dateLivraison : '11/05'
      }
    },
    created() {
      this.$store.commit('changeTitle', 'Commander un repas')
      this.$store.dispatch('getRepasCommande')
    },
    methods : {
      passerCommande(repas) {
        this.$store.dispatch('passerCommande', repas)
      },
    },
    computed : {
      listeRepasCommande() {
        return this.$store.getters.listeRepasCommande
      },
    },
  }
</script>

<style scoped>

</style>
