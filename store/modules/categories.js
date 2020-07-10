import Vue from 'vue';

export const state = () => ({
  categories: [],
  loading: true,
});

export const mutations = {
  loadCategories(state, categories) {
    state.categories = categories
  },
  updateLoading(state, loading) {
    state.loading = loading;
  }
};

export const actions = {
  async fetchCategories({ commit, getters, dispatch }) {
    let categories = [];

    await this.$axios.get(Vue.prototype.$config.categoriesUrl.list, {})
      .then(response => {
        categories = response.data;
        commit('updateLoading', false)
      }).catch(error => {
        commit('updateLoading', false);
        console.log(error);
      });

    commit('loadCategories', categories);
  },
};

export const getters = {
  getLoading(state) {
    return state.loading
  },
  getCategories(state) {
    return state.categories
  },
};
