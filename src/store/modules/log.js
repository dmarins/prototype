export default {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    success: (state, message) => {
      state.messages.push(message);
    },
    clear: state => {
      state.messages = [];
    }
  },
  actions: {
    register: ({ commit }, message) => {
      commit("success", message);
    },
    clear: ({ commit }) => {
      commit("clear");
    }
  },
  getters: {
    messages: state => state.messages
  }
};
