import Vue from 'vue';

export const state = () => ({
  errors: {}
});

export const getters = {
  getErrors(state) {
    return state.errors;
  }
};

export const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  }
};

export const actions = {
  async doAuth({ commit }, data) {
    commit('setErrors', {})
    // await this.$axios.$post
    await this.$axios.post('auth/login', data)
      .then(response => {
        this.$toast.success('Успешная авторизация...')
        console.log(response.data);
      }).catch(error => {
        console.log(error.response.data);
        console.log(error.response);
        if (error.response.status === 422) {
          commit('setErrors', error.response.data.errors)
          // this.errors = error.response.data.errors;
          this.$toast.error('Проверьте введённые данные')
        }
        if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        }
      });
  }
};
