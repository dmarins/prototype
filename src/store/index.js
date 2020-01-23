import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import log from "./modules/log.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["log"]
    })
  ],
  modules: {
    log: log
  }
});
