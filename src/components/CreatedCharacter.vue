

<template>
  <div role="container">
      <p>This is {{ name }}, the {{ race }} {{ job }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    name: state => state.character.name,
    race: state => state.character.race,
    job: state => state.character.job
  })
}
</script>
<!-- Inline styling with if statements for if it should be centered or not? -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
