<template>
    <v-ons-page>
        <v-ons-navigator swipeable
                         :options="{
                                        animation: 'fade',
                                        animationOptions: {duration: 0.2, timing: 'ease-in'}
                                     }"
                         :page-stack="pageStack"
                         @push-page="pageStack.push($event)"
                         @navigator-back="pageStack.pop();"
        >
        </v-ons-navigator>
    </v-ons-page>
</template>

<script>
    import Accueil from '@/components/Accueil';
    import store from '../store';

    export default {
        name: 'accueil-nav',
        data() {
            return {
                pageStack: [Accueil]
            };
        },
        methods: {
            test() {
                console.log('test');
            }
        }
    };
</script>

<style lang="scss">
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
