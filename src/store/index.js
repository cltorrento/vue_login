import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
  },
  getters: {},
  mutations: {
    login(state, email) {
      state.email = email;
      localStorage.setItem("email", email);
      alert("Logged In");
    },
    logout(state) {
      state.email = "";
      localStorage.removeItem("email");
      alert("LoggedOut");
    },
    initializeStore(state) {
      if (localStorage.getItem("email")) {
        state.email = localStorage.getItem("email");
      }
    },
  },
  actions: {},
  modules: {},
});
