<template>
  <div>
    <span>
      Commandez avant 18h pour une livraison le {{ dateLivraison }} midi.
    </span>
  </div>
</template>

<script>
  export default {
    name : 'liste-repas',
    data() {
      return {
        dateLivraison : '11/05'
      }
    },
    created() {
      this.$store.commit('changeTitle', 'Commander un repas')
    }
  }
</script>

<style scoped>

</style>
