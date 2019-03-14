<template>
  <div id="app">
    <h1>Ouch, I died:</h1>
    <div v-if="!selectedSet">
      <h2>A Character Creator for the Confused</h2>
      <p>Specifically D&D's 5E: Lost Mines Starter Set</p> 
    </div>
    <image-box />
    <setting-button />
    <error-message />
    <character-creator />
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    selectedSet: state => state.selectedSet
  })
  };
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
