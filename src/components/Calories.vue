<template>
  <div>calories</div>
</template>

<script>
  export default {
    name : 'Calories',
    created() {
      this.$store.commit('changeTitle', 'Calories')
    }
  }
</script>

<style scoped>

</style>
