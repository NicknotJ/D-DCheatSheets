import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import { mapState } from "vuex";
import ImageBox from "./components/ImageBox.vue";
import SettingButton from "./components/SettingButton.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import CharacterCreator from "./components/CharacterCreator.vue";
import CreatedCharacter from "./components/CreatedCharacter.vue";
Vue.config.productionTip = false;

Vue.component("image-box", ImageBox);
Vue.component("setting-button", SettingButton);
Vue.component("error-message", ErrorMessage);
Vue.component("character-creator", CharacterCreator);
Vue.component("created-character", CreatedCharacter);
new Vue({
  // router,
  store,
  computed: mapState({
    pictureRef: state => state.pictureRef,
    pictureAlt: state => state.pictureAlt,
    pictureProps: state => state.pictureProps,
    settings: state => state.settings,
    errorMsg: state => state.errorMsg,
    selectedSet: state => state.selectedSet
  }),
  render: h => h(App)
}).$mount("#app");
