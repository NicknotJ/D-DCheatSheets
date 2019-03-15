

<template>
  <div role="container">
      <h3>This is {{ character.name }}, the {{ character.race }} {{ character.job }}:</h3>
      <div role= "container" class="levelContainer">
          <p>Level: {{character.level}} </p>
          <button v-on:click="levelUp">Level Up</button>
      </div>
      <button v-on:click="toggleCheatSheet">CheatSheet</button>
      <div v-if="cheatSheet" role='container' class="cheatSheetContainer">
        <p v-for="attack in attacks"> {{ attack }} </p>
        <p>Passive Perception: {{10 + characterStats[4].modifier}}</p>
        <p>The DM doesn't love you and never will</p> 
      </div>
      <ul>
        <li v-for="stats in characterStats">{{stats.name}}: {{stats.value}} Modifier: {{stats.modifier}}</li>
      </ul>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    character: state => state.character,
    characterStats: state => state.character.characterStats,
    weapons: state => state.weapons,
    attacks: state => state.attacks
  }),
  data: function(){
    return {
    cheatSheet: false
    }
  },
  methods: {
    // ...mapActions('', ['checkLevelUpStats']), (might be able to pass in multiple parameters)
    levelUp(){
      //disable button?
      //{job, level, character: this.character} passed in as a parameter
      //allows us to break it doooooooown
      this.$store.dispatch('checkLevelUpStats', this.character);
    },
    toggleCheatSheet(){
      this.cheatSheet = !this.cheatSheet
    }
  }
}
</script>
<!-- Inline styling with if statements for if it should be centered or not? -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style-type: none;
}
</style>
