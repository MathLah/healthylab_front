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
                    <v-ons-input placeholder="Age" float v-model="age">
                    </v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item v-for="(sexe, $index) in sexes" :key="sexe" tappable>
                <label class="left">
                    <v-ons-radio
                        :input-id="'radio-' + $index"
                        :value="sexe"
                        v-model="selectedSexe"
                    >
                    </v-ons-radio>
                </label>
                <label :for="'radio-' + $index" class="center">
                    {{ sexe }}
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <v-ons-button style="margin: 6px 0" v-on:click="next">Suivant</v-ons-button>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
    export default {
        name: 'register-step-1',
        inject: ['navigator'],
        data() {
            return {
                age: 0,
                sexes: ['Homme', 'Femme'],
                selectedSexe: '',
            };
        },
        computed: {
            title() {
                return 'Register Step 1';
            }
        },
        methods: {
            next() {
                const matched = this.$router.matcher.match('/register/2').matched.pop();
                this.$emit('push-page', matched.components.default);
            },
        }
    };
</script>

<style scoped>

</style>
