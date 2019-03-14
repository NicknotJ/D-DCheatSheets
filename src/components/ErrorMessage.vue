

<template>
  <p v-if="errorMsg"> {{errorMsg}} </p>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    errorMsg: state => state.errorMsg
  })
  };
</script>
<!-- Inline styling with if statements for if it should be centered or not? -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
