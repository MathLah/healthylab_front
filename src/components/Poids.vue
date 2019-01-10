<template>
    <div>poids</div>
</template>

<script>
    export default {
        name: 'poids',
        created() {
            this.$store.commit('changeTitle', 'Poids');
        }
    };
</script>

<style scoped>

</style>
