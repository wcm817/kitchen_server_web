import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  getters: {
  },
  mutations: {
    setUsername (state, name) {
      state.username = name;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer (state) {
        return {
          username: state.username
        }
      }
    })
  ]
})
