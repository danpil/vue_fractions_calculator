import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    operations: [],
  },
  getters: {
    operations(state) {
      return state.operations;
    },
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    },
  },
  actions: {
    save({ state, dispatch, commit }, operation) {
      commit('set', { type: 'operations', items: [...state.operations, operation] });
    },
    clear({ state, dispatch, commit }) {
      commit('set', { type: 'operations', items: [] });
    },
  },
});

export default store;
