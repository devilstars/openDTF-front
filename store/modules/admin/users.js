import Vue from 'vue';

export const state = () => ({
  errors: {},
  items: null,
});

export const getters = {
  getErrors(state) {
    return state.errors;
  },
  getUsers(state) {
    return state.users;
  }
};

export const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },
  setUsers(state, users) {
    state.users = users;
  },
};

export const actions = {
  async getUsers({commit}, data) {
    commit('setErrors', {})
    await this.$axios.post(Vue.prototype.$config.dashboardUrls.usersUrl.list, data)
      .then(response => {
        // this.$toast.success('Успешная регистрация...')

        commit('setUsers', response.data);

      }).catch(error => {
        if (error.response.status === 422) {
          // commit('setErrors', error.response.data.errors)
          this.$toast.error('Проверьте введённые данные')
        }
        if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        }
      });
  },
};
