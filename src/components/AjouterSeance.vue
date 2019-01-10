<template>

</template>

<script>
    export default {
        name: 'ajouter-seance',
        created() {
            this.$store.commit('changeTitle', 'Ajouter une séance');
        }
    };
</script>

<style scoped>

</style>
