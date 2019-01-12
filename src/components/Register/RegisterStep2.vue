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
        <v-ons-list>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Poids actuel" float v-model="actual">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="Poids souhaité" float v-model="desired">
                    </v-ons-input>
                </div>
            </v-ons-list-item>

            <v-ons-list-item>
                <v-ons-button style="margin: 6px 0" v-on:click="next">Suivant</v-ons-button>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
    export default {
        name: 'register-step-2',
        inject: ['navigator'],
        data() {
            return {
                actual: 0,
                desired: 0,
            };
        },
        computed: {
            title() {
                return 'Register Step 2';
            }
        },
        methods: {
            next() {
                const matched = this.$router.matcher.match('/register/3').matched.pop();
                this.$emit('push-page', matched.components.default);
            },
        }
    };
</script>

<style scoped>

</style>
