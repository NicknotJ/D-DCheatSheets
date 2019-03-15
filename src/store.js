import Vue from "vue";
import Vuex from "vuex";
import { startingStats, levelUpStats, startingWeapons, charAttacks } from './LostMinesData.js';

//API calls to D&D App within the store (fetchSpells)
//Don't return the results, updates the store (which should update components)

Vue.use(Vuex);
//Future: Support Editions (5E vs Pathfinder vs 3.5?)
export default new Vuex.Store({
  state: {
    pictureRef:
      "https://i.pinimg.com/originals/ee/3d/9f/ee3d9f672d00470af47a7165ee767c4e.jpg",
    pictureAlt: "Picture of a Tavern",
    pictureProps: "From the Internet",
    settings: [
      {
        name: "Lost Mines Starter",
        desc: "Starter Pack for 5th Edition",
        value: "lostMines"
      },
      {
        name: "Basic Rules (Online)",
        desc: "Online Rules for 5th Edition",
        value: "basicRules"
      },
      { name: "Full Ruleset", desc: "Full 5th Edition", value: "fullRules" }
    ],
    selectedSet: null,
    errorMsg: null,
    lostMinesJobs: [
      { name: "Please Select a Class!", value: null },
      { name: "CommonerFighter", value: "commonerFighter" },
      { name: "NobleFighter", value: "nobleFighter" },
      { name: "Rogue", value: "rogue" },
      { name: "Wizard", value: "wizard" },
      { name: "Cleric", value: "cleric" }
    ],
    lostMinesRace: ["Human", "Elf", "Dwarf", "Halfling"],
    job: null,
    character: null,
    characterStats: null,
    weapons: null
  },
  mutations: {
    changeJob(state, job) {
      state.job = job;
    },
    changeSet(state, set) {
      state.selectedSet = set;
    },
    setErrorMsg(state, msg) {
      state.errorMsg = msg;
    },
    setRaceLostMines(state, job) {
      // let defaultRaces = ['Human', 'Elf', 'Dwarf', 'Halfling'];
      if (job === "commonerFighter" || job === "nobleFighter") {
        return (state.lostMinesRace = ["Select a Race", "Human"]);
      }
      if (job === "rogue") {
        return (state.lostMinesRace = ["Select a Race", "Halfling"]);
      }
      if (job === "wizard") {
        return (state.lostMinesRace = ["Select a Race", "Elf"]);
      }
      if (job === "cleric") {
        return (state.lostMinesRace = ["Select a Race", "Dwarf"]);
      }
      state.errorMsg = "HOW DID YOU BREAK THIS";
    },
    generateLostMinesCharacter(state, data){
      state.character = {};
      state.character.name = data[0];
      state.character.job = data[1];
      state.character.race = data[2];
      state.character.level = 1;
      state.character.characterStats = startingStats(data[1]);
      state.errorMsg = null;
      state.weapons = startingWeapons(data[1]);
      state.prof = 2;
      state.attacks = charAttacks(state.weapons, state.prof, state.character.characterStats)
    },
    levelUp(state, num){
      let originalNum = state.character.level;
      let newNum = originalNum + num;
      state.character = { ...state.character, level: newNum };
    },
    changeStats(state, stats){
      state.character = { ...state.character, characterStats: stats};
    }
  },
  actions: {
    checkSet: ({ commit }, set) => {
      if (set === "basicRules") {
        return commit("setErrorMsg", "Basic Ruleset Coming Soon!");
      } else if (set === "fullRules") {
        return commit("setErrorMsg", "Full Ruleset NOT Coming Soon!");
      } else {
        commit("setErrorMsg", null);
        return commit("changeSet", set);
      }
    },
    checkLevelUpStats({ commit }, character){
      console.log(character.level);
      console.log(character.job);
      commit("levelUp", 1);
      if(character.level + 1 === 4){
        commit('changeStats', levelUpStats(character.characterStats, character.job));
      }
    }

  }
});
