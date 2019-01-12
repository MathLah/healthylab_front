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
        <v-ons-list-item v-for="(type, $index) in types" :key="type" tappable>
            <label class="left">
                <v-ons-radio
                    :input-id="'radio-' + $index"
                    :value="type"
                    v-model="selectedType"
                >
                </v-ons-radio>
            </label>
            <label :for="'radio-' + $index" class="center">
                {{ type }}
            </label>
        </v-ons-list-item>
        <v-ons-list-item>
            <v-ons-button style="margin: 6px 0" v-on:click="next">Suivant</v-ons-button>
        </v-ons-list-item>
    </v-ons-page>
</template>

<script>
    export default {
        name: 'register-step-4',
        inject: ['navigator'],
        data() {
            return {
                types: ['Sédentaire', 'Légère activité', 'Actif', 'Très actif', 'Super actif'],
                selectedType: 0
            };
        },
        computed: {
            title() {
                return 'Register Step 4';
            }
        },
        methods: {
            next() {
                const matched = this.$router.matcher.match('/register/5').matched.pop();
                this.$emit('push-page', matched.components.default);
            },
        }
    };
</script>

<style scoped>

</style>
