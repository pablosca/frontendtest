import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    clickedSquares: []
  },
  mutations: {
    ADD_CLICKED_SQUARE (state, payload) {
      state.clickedSquares.push(payload);
    }
  },
  actions: {
    addClickedSquare ({ commit }, payload = {}) {
      commit('ADD_CLICKED_SQUARE', payload);
    }
  },
  getters: {
    activeSquare (state) {
      const clicked = state.clickedSquares;
      return clicked.length ? clicked[clicked.length - 1] : {};
    }
  },
  strict: debug
});
