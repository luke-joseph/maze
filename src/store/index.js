import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    level: 0
  },
  mutations: {
    INCREMENT_SCORE(state, value) {
      state.score += value;
    },
    INCREMENT_LEVEL(state) {
      state.level += 1;
    }
  },
  actions: {
    updateScore({ state, commit }, value) {
      if (state.score < 1000) {
        commit("INCREMENT_SCORE", value);
      }
    },
    updateLevel({ commit }) {
      commit("INCREMENT_LEVEL");
    }
  },
  modules: {}
});
