

<template>
  <form v-if="selectedSet" v-on:submit="submitCharacter($event)">
    <p> Lost Mine's Setting (HardCoded) </p>
    <label for="name">Character's Name:</label>
    <input type="text" id="nameGen" placeholder="Leave Blank for Auto-Gen" />
    <label for="job">Character's Class:</label>
    <select v-on:change="selectJob($event)" id="jobGen">
      <option v-for="job in lostMinesJobs" name="job" :value="job.value">{{job.name}}</option>
    </select>
    <select v-if="job" id="raceGen">
      <option v-for="race in race" :value="race">{{ race }}</option>
    </select>
    <button v-on:click="clickGenerate($event)" type="submit">Generate Character!</button>
  </form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    selectedSet: state => state.selectedSet,
    lostMinesJobs: state => state.lostMinesJobs,
    race: state => state.lostMinesRace,
    job: state => state.job
  }),
  methods: {  
    selectJob(event){
      event.preventDefault();
      console.log(event.target.value);
      this.$store.commit('changeJob', event.target.value);
      this.$store.commit('setRaceLostMines', event.target.value);
  },
    clickGenerate(event){
      event.preventDefault();
      let name = event.path[1][0].value;
      if(name === null || name === ''){
        return this.$store.commit('setErrorMsg', 'Please Input a Name');
      }
      let job = event.path[1][1].value;
      if(job === null){
        return this.$store.commit('setErrorMsg', 'Please select a Class');
      }
      let race = event.path[1][2].value;
      if(race === null || race === 'Select a Race'){
        return this.$store.commit('setErrorMsg', 'Please select a Race');
      }
      let data = [name, job, race];
      return this.$store.commit('generateLostMinesCharacter', data);
    }}
  };
</script>
<!-- Inline styling with if statements for if it should be centered or not? -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
