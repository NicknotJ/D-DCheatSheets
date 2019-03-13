

<template>
  <div role="image-container">
    <img :src="pictureRef" :alt="pictureAlt" />
    <p> {{pictureProps }} </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    pictureRef: state => state.pictureRef,
    pictureAlt: state => state.pictureAlt,
    pictureProps: state => state.pictureProps
  })
  };
</script>
<!-- Inline styling with if statements for if it should be centered or not? -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  position: relative;
  max-width: 50%;
  max-height: 50%;
}


</style>
