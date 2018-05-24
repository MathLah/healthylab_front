<template>
  <div>
    <span>Version basique</span>
    <span>Version Silver</span>
    <span>Version Gold</span>
  </div>
</template>

<script>
  export default {
    name : 'souscrire-premium',
    created() {
      this.$store.commit('changeTitle', 'Gérer abonnement')
    }
  }
</script>

<style scoped>

</style>
