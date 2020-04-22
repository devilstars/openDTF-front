export const state = () => ({
  showSidebar: false,
  buttonWasTouched: false
});

export const mutations = {
  toggleShowSidebar(state, data) {
    state.showSidebar = !state.showSidebar
  },
  setButtonWasTouched(state, data) {
    state.buttonWasTouched = data;
  },
  setShowSidebarOutside(state, data) {
    state.showSidebar = false;
  }
};

export const actions = {
  toggleShowSidebar({ commit }) {
    commit('toggleShowSidebar');
    commit('setButtonWasTouched', true);
    setTimeout(() => {
      commit('setButtonWasTouched', false);
    }, 500)
  },
  setShowSidebarOutside({ commit, state }) {
    if (!state.buttonWasTouched) {
      commit('setShowSidebarOutside');
    }
  }
}

export const getters = {
  getShowSidebar(state) {
    return state.showSidebar;
  }
};
