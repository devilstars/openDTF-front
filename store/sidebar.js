export const state = () => ({
  showSidebar: false,
});

export const mutations = {
  toggleShowSidebar(state, data) {
    state.showSidebar = !state.showSidebar
  },
  setShowSidebarOutside(state, data) {
    state.showSidebar = false;
  }
};

export const actions = {
  toggleShowSidebar({ commit }) {
    commit('toggleShowSidebar');
  },
  setShowSidebarOutside({ commit, state }) {
    if (state.showSidebar) {
      setTimeout(() => {
        commit('setShowSidebarOutside');
      }, 100)
    }
  }
}

export const getters = {
  getShowSidebar(state) {
    return state.showSidebar;
  }
};
