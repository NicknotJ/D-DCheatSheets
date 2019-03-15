

<template>
  <div role="container">
      <h3>This is {{ character.name }}, the {{ character.race }} {{ character.job }}:</h3>
      <div role= "container" class="levelContainer">
          <p>Level: {{character.level}} </p>
          <button v-on:click="levelUp($event)">Level Up</button>
      </div>
      <button v-on:click="toggleCheatSheet">CheatSheet</button>
      <div v-if="cheatSheet" role='container' class="cheatSheetContainer">
        <p>Your attack roll is a d20 + {{characterStats[0].modifier}}
        <p>The DM doesn't love you and never will</p> 
      </div>
      <ul>
        <div v-for="stats in characterStats">
          <li>{{stats.name}}: {{stats.value}} Modifier: {{stats.modifier}}</li>
        </div>
      </ul>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    character: state => state.character,
    characterStats: state => state.character.characterStats
  }),
  data: function(){
    return {
    cheatSheet: false
    }
  },
  methods: { 
    levelUp(e){
      e.preventDefault();
      //disable button?
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
