<template>
    <div>test</div>
</template>

<script>
  export default {
    name : 'detail-repas',
    data() {
      return {
        dateLivraison : new Date()
      }
    },
    created() {
      this.$store.commit('changeTitle', 'Commander un repas')
    },
  }
</script>

<style scoped>

</style>
