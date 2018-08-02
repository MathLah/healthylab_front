<template>
  <div>calories</div>
</template>

<script>
  export default {
    name : 'calories',
    created() {
      this.$store.commit('changeTitle', 'Calories')
    }
  }
</script>

<style scoped>

</style>
