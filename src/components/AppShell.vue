<template>
  <v-ons-page>
    <v-ons-toolbar class="toolbar primary">
      <div class="left">
        <v-ons-icon class="profil_picture"></v-ons-icon>
        <span class="current_date">{{ new Date() | shortDate }}</span>
      </div>

      <div class="center">
        <v-ons-icon class="logo"></v-ons-icon>
        <span class="title">{{title}}</span>
      </div>

      <div class="right yolo">
        <router-link class="upgrade" :to="{ name : 'SouscrirePremium' }" v-if="!profil.premium">Passer à la
          version premium
        </router-link>
        <span class="point_counter">{{profil.points}} points</span>
      </div>
    </v-ons-toolbar>

    <div class="container">
      <router-view/>
    </div>

    <v-ons-bottom-toolbar class="bottom-nav">
      <v-ons-toolbar-button>
        <router-link :to="{name : 'Accueil'}">
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </router-link>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button>
        <router-link :to="{name : 'ListeRepas'}">
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </router-link>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button>
        <v-ons-speed-dial>

          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>

          <v-ons-fab v-show="false">
          </v-ons-fab>

          <v-ons-speed-dial-item
            v-for="item in actionMenu" :key="item.routeName"
            @click="$router.push({ name : item.routeName })"
          >
            <v-ons-icon :icon="item.icon"></v-ons-icon>
          </v-ons-speed-dial-item>
        </v-ons-speed-dial>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button>
        <router-link :to="{name : 'Calories'}">
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </router-link>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button>
        <router-link :to="{name : 'Poids'}">
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </router-link>
      </v-ons-toolbar-button>
    </v-ons-bottom-toolbar>
  </v-ons-page>
</template>

<script>
  import { getInfosBase } from '../api/profil'
  import store from '../store'

  export default {
    name : 'app-shell',
    data() {
      return {
        actionMenu : [
          {label : 'Séance', icon : 'md-menu', routeName : 'AjouterSeance'},
          {label : 'Repas', icon : 'md-menu', routeName : 'AjouterRepas'},
          {label : 'Coach / éléve', icon : 'md-menu', routeName : 'AjouterAmi'},
        ],
      }
    },
    async beforeRouteEnter(to, from, next) {
      try {
        const infos = await getInfosBase()
        store.commit('setInfosbase', infos)
      } catch (e) {

      }
      next()
    },
    computed : {
      title() {
        return this.$store.state.title
      },
      profil() {
        return this.$store.getters.profilBase
      },
    },
  }
</script>

<style lang="scss" scoped>
  .primary {
    background-color: #00A19A;
  }

  .yolo {
    display: flex;
    flex-direction: column;
  }

  .bottom-nav {
    display: flex;
    flex-direction: row;
    overflow: visible;

    > * {
      flex: 1;
      align-content: center;

      a.router-link-exact-active {
        color: #00A19A;
      }

      a:not(.router-link-exact-active ) {
        color: #aaa;
      }
    }
  }
</style>
