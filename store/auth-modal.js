export const state = () => ({
  showModal: false
});

export const mutations = {
  toggleShowModal(state, data) {
    state.showModal = !state.showModal
  },
  setShowModalOutside(state, data) {
    state.showModal = false;
  }
};

export const actions = {
  toggleShowModal({ commit }) {
    commit('toggleShowModal');
  },
  setShowModalOutside({ commit, state }) {
    if (state.showModal) {
      setTimeout(() => {
        commit('setShowModalOutside');
      }, 100)
    }
  }
}

export const getters = {
  getShowModal(state) {
    return state.showModal;
  }
};
