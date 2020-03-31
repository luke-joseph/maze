import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    level: 0,
    levelAmount: 5,
    timer: {
      seconds: 0,
      minutes: 0,
      active: false
    },
    completed: false
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
    GAME_COMPLETED(state) {
      state.timer.active = false;
      state.completed = true;
    },
    RESET_GAME(state) {
      state.level = 0;
      state.score = 0;
      state.completed = false;
      state.timer.seconds = 0;
      state.timer.minutes = 0;
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
    updateLevel({ commit, state, dispatch }) {
      if (state.levelAmount > state.level) {
        commit("INCREMENT_LEVEL");
      } else {
        dispatch("gameCompleted");
      }
    },
    startGame({ commit, dispatch }) {
      commit("START_TIMER");
      commit("INCREMENT_LEVEL");
      dispatch("updateTimer");
    },
    gameCompleted({ commit }) {
      commit("GAME_COMPLETED");
    },
    resetGame({ commit }) {
      commit("RESET_GAME");
    },
    updateTimer({ state, commit, dispatch }) {
      setTimeout(() => {
        if (state.timer.active) {
          commit("UPDATE_TIMER");
          dispatch("updateTimer");
        }
      }, 1000);
    }
  },
  modules: {}
});
