<template>
    <v-ons-splitter>
        <v-ons-splitter-side swipeable
            width="75%" collapse="" side="left"
            :open.sync="openSide"
        >
            <v-ons-page>
                <v-ons-card>
                    {{ profile.first_name }}
                    {{ profile.last_name }}
                    {{ profile.email }}
                </v-ons-card>
                <v-ons-list>
                    <v-ons-list-item>
                        <router-link :to="{name : 'Accueil'}">
                            <div class="center">ACCUEIL</div>
                        </router-link>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">L'OFFRE PREMIUM</div>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">MES DONNÉES</div>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">MES SALLES DE SPORTS</div>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">MESSAGERIE</div>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">MES AMIS</div>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">FAQ</div>
                    </v-ons-list-item>
                    <v-ons-list-item>
                        <div class="center">A PROPOS</div>
                    </v-ons-list-item>
                </v-ons-list>
            </v-ons-page>
        </v-ons-splitter-side>

        <v-ons-splitter-content>
            <v-ons-page>
                <div class="container">
                    <router-view/>
                </div>

                <v-ons-bottom-toolbar class="bottom-nav">
                    <v-ons-toolbar-button>
                        <router-link :to="{name : 'Accueil'}">
                            <img src="assets/img/chef-hat.png" alt="First">
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
                        <router-link :to="{name : 'Profil'}">
                            <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
                        </router-link>
                    </v-ons-toolbar-button>
                </v-ons-bottom-toolbar>
            </v-ons-page>
        </v-ons-splitter-content>


    </v-ons-splitter>
</template>

<script>
    import store from '../store';

    export default {
        name: 'app-shell',
        data() {
            return {
                actionMenu: [
                    {label: 'Séance', icon: 'md-menu', routeName: 'AjouterSeance'},
                    {label: 'Repas', icon: 'md-menu', routeName: 'AjouterRepas'},
                    {label: 'Coach / éléve', icon: 'md-menu', routeName: 'AjouterAmi'},
                ],
                profile: this.$store.getters.profilComplet,
                openSide: false,
            };
        },
        async beforeRouteEnter(to, from, next) {
            try {
                await store.dispatch('getInfosBase');
            } catch (e) {
                console.log(e);
            }
            next();
        },
        computed: {
            title() {
                return this.$store.state.title;
            },
            profil() {
                return this.$store.getters.profilBase;
            },
        },
        watch: {
            $route() {
                this.openSide = false;
            },
        }
    };
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
            text-align: center;

            a.router-link-exact-active {
                color: #00A19A;
            }

            a:not(.router-link-exact-active ) {
                color: #aaa;
            }
        }
    }
</style>
