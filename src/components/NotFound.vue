<template>
  <div>Page not found</div>
</template>

<script>
  export default {
    name : 'not-found',
    created() {
      this.$store.commit('changeTitle', '')
    }
  }
</script>

<style scoped>

</style>
