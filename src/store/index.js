import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    level: 0,
    levelAmount: 5,
    timer: {
      seconds: 0,
      minutes: 0,
      active: false
    },
    completed: false,
    gameOver: false
  },
  mutations: {
    INCREMENT_LEVEL(state) {
      state.level += 1;
    },
    START_TIMER(state) {
      state.timer.active = true;
    },
    GAME_COMPLETED(state) {
      state.timer.active = false;
      state.completed = true;
    },
    GAME_OVER(state) {
      state.level = 0;
      state.score = 0;
      state.timer.seconds = 0;
      state.timer.minutes = 0;
      state.gameOver = true;
      state.timer.active = false;
    },
    RESET_GAME(state) {
      state.level = 0;
      state.score = 0;
      state.completed = false;
      state.gameOver = false;
      state.timer.seconds = 0;
      state.timer.minutes = 0;
      state.timer.active = false;
    },
    UPDATE_TIMER(state) {
      if (state.timer.seconds < 59) {
        state.timer.seconds += 1;
      } else {
        state.timer.seconds = 0;
        state.timer.minutes += 1;
      }
    }
  },
  actions: {
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
    gameOver({ commit }) {
      commit("GAME_OVER");
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
