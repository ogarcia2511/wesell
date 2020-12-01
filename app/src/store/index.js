import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLoggedIn: false,
      auth: null,
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
    setAuth(state, auth) {
      state.user.auth = auth;
    },
    setData(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('setLoggedIn', user !== null);

      if (user) {
        if (user.type === 0) {
          commit('setAuth', {
            uid: user.uid,
            email: user.email,
          });
        } else {
          commit('setAuth', {
            uid: user.uid,
            email: user.email,
          });
        }
      } else {
        commit('setAuth', null);
      }
    },
    setData({ commit }, data) {
      commit('setData', data);
    },
  },
  modules: {
  },
});
