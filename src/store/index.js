import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    level: 0,
    timer: {
      seconds: 0,
      minutes: 0,
      active: false
    }
  },
  mutations: {
    INCREMENT_SCORE(state, value) {
      state.score += value;
    },
    INCREMENT_LEVEL(state) {
      state.level += 1;
    },
    START_TIMER(state) {
      state.timer.active = true;
    },
    STOP_TIMER(state) {
      state.timer.active = false;
    },
    UPDATE_TIMER(state) {
      if (state.timer.seconds < 59) {
        state.timer.seconds += 1;
      } else {
        state.timer.seconds = 0;
        state.timer.minutes = 1;
      }
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
    },
    startGame({ commit, dispatch }) {
      commit("START_TIMER");
      commit("INCREMENT_LEVEL");
      dispatch("updateTimer");
    },
    updateTimer({ state, commit, dispatch }) {
      setTimeout(() => {
        commit("UPDATE_TIMER");
        if (state.timer.active) {
          dispatch("updateTimer");
        }
      }, 1000);
    }
  },
  modules: {}
});
