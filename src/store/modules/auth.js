const state = {
  isLoggedIn: false
};

const getters = {
  userAuthenticated (state) {
    return state.isLoggedIn;
  }
};

const mutations = {
  setAuth (state, load) {
    state.isLoggedIn = load.isAuth;
  }
};

const actions = {
  login ({ commit }) {
    commit('setAuth', { isAuth: true });
  },
  logout ({ commit }) {
    commit('setAuth', { isAuth: false });
  }
};

export default {
  state, getters, actions, mutations
};