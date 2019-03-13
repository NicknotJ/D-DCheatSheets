<template>
  <section class='settingButtonSection'>
    <div role='container' class='settingButtonContainer' v-for="setting in settings" :key="setting.value" v-if="!selectedSet">
      <button v-on:click="selectSet($event)" type="submit" :value="setting.value"> {{ setting.name }} </button>
    </div>
  </section>
</template>


<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    settings: state => state.settings,
    selectedSet: state => state.selectedSet
  }),
  methods: {
      selectSet(event){
          event.preventDefault();
          console.log(event.path[0].value);
          this.$store.dispatch('checkSet', event.path[0].value)
      }
  }
  };
</script>

<style scoped>

div {
    display: inline-block;
    position: relative;
    padding: 5px;
}

</style>
