const state = {
  counter: 0,
  incrementBy: 3
};

const getters = {
  theCounter (state) {
    return state.counter * state.incrementBy;
  },
  incrementBy(state) {
    return state.incrementBy
  },
  limitedCounter (_, getters) {                                     // + rootState, rootGetters
    const limitedCounter = getters.theCounter;
    if (limitedCounter < 0) return 0;
    if (limitedCounter > 100) return 100;
    return limitedCounter;
  }
};

const mutations = {
  increment (state) {
    state.counter++;
  },
  increase (state, load) {
    state.counter += load.value;
  }
};

const actions = {
  increment ({ commit  }) {
    setTimeout(() => {
      commit('increment');
    }, 2000);
  },
  increase ({ commit }, load) {
    commit('increase', load);
  }
};

export default {
  namespaced: true,
  state, getters, actions, mutations
}
