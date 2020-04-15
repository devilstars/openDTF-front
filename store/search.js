export const state = () => ({
  showSearch: false
});

export const mutations = {
  toggleShowSearch(state, data) {
    state.showSearch = !state.showSearch
  },
  setShowSearchOutside(state, data) {
    state.showSearch = false;
  }
};

export const actions = {
  toggleShowSearch({ commit }) {
    commit('toggleShowSearch');
  },
  setShowSearchOutside({ commit, state }) {
    if (state.showSearch) {
      setTimeout(() => {
        commit('setShowSearchOutside');
      }, 100)
    }
  }
}

export const getters = {
  getShowSearch(state) {
    return state.showSearch;
  }
};
