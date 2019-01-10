<template>
    <div>azeza</div>
</template>

<script>
    export default {
        name: 'ajouter-repas',
        created() {
            this.$store.commit('changeTitle', 'Suggestions de Repas');
        }
    };
</script>

<style scoped>

</style>
