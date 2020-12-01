import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLoggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setLoggedIn(state, value) {
      state.user.isLoggedIn = value;
    },
    setData(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('setLoggedIn', user !== null);

      if (user) {
        commit('setData', {
          uid: user.uid,
          email: user.email,
        });
      } else {
        commit('setData', null);
      }
    },
  },
  modules: {
  },
});
