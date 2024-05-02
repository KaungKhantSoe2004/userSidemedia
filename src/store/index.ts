import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    userData: null,
  },
  getters: {},
  mutations: {},
  actions: {
    changeToken: ({ state }, value) => (state.token = value),
    changeUser: ({ state }, value) => (state.userData = value),
  },
  modules: {},
});
