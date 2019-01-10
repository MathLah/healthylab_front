<template>
    <div>Profil</div>
</template>

<script>
    export default {
        name: 'profil',
        created() {
            this.$store.commit('changeTitle', 'Profil');
        }
    };
</script>

<style scoped>

</style>
