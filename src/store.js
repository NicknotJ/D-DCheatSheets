import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//Future: Support Editions (5E vs Pathfinder vs 3.5?) 
export default new Vuex.Store({
  state: {
    pictureRef: "https://i.pinimg.com/originals/ee/3d/9f/ee3d9f672d00470af47a7165ee767c4e.jpg",
    pictureAlt: "Haha, I don't know how any of this works!",
    pictureProps: "From the Internet",
    settings: [{name: "Lost Mines Starter", desc: "Starter Pack for 5th Edition", value: "lostMines"}, 
    {name: "Basic Rules (Online)", desc: "Online Rules for 5th Edition", value: "basicRules"}, {name: "Full Ruleset", desc: "Full 5th Edition", value: "fullRules"}],
    selectedSet: null,
    errorMsg: null,
    lostMinesJobs: [{name: 'CommonerFighter', value: 'commonerFighter'}, {name: 'NobleFighter', value: 'nobleFighter'}, {name: 'Rogue', value: 'rogue'}, {name: 'Wizard', value: 'wizard'}, {name: 'Cleric', value: 'cleric'}],
    race: ['Human', 'Elf', 'Dwarf', 'Halfling'],
    job: null
  },
  mutations: {
    changeJob(state, job){
      state.job = job;
    },
    changeSet(state, set){
      state.selectedSet = set;
    },
    setErrorMsg(state, msg){
      state.errorMsg = msg;
    }
  },
  actions: {
    checkSet: ({commit}, set) => {
      if(set === 'basicRules'){
        return commit('setErrorMsg', 'Basic Ruleset Coming Soon!');
      } else if(set === 'fullRules'){
        return commit('setErrorMsg', 'Full Ruleset NOT Coming Soon!')
      } else {
        commit('setErrorMsg', null);
        return commit('changeSet', set);
      }
    }
  }
});
