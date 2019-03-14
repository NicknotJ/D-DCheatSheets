

<template>
  <form v-if="selectedSet">
    <p> Lost Mine's Setting (HardCoded) </p>
    <label for="name">Character's Name:</label>
    <input type="text" id="name" placeholder="Leave Blank for Auto-Gen" />
    <label for="job">Character's Class:</label>
    <select v-on:change="selectJob($event)">
      <option v-for="job in lostMinesJobs" name="job" value="job.value">{{job.name}}</option>
    </select>
    <select v-if="job">
      <option v-for="race in race" name="race" value="race">{{ race }}</option>
    </select>
    <button  type="submit">Generate Character!</button>
  </form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    selectedSet: state => state.selectedSet,
    lostMinesJobs: state => state.lostMinesJobs,
    race: state => state.race,
    job: state => state.job
  }),
  methods: {  
    selectJob(event){
      event.preventDefault();
      console.log(event);
  }}
  };
</script>
<!-- Inline styling with if statements for if it should be centered or not? -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
