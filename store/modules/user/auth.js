import Vue from 'vue';

export const state = () => ({
  errors: {},
  token: null,
  email: null,
  name: null,
  abilities: null
});

export const getters = {
  getErrors(state) {
    return state.errors;
  },
  getToken(state) {
    return state.token;
  },
  getEmail(state) {
    return state.email;
  },
  getName(state) {
    return state.name;
  },
  getAbilities(state) {
    return state.abilities;
  }
};

export const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },
  setToken(state, token) {
    state.token = token;
  },
  setEmail(state, email) {
    state.email = email;
  },
  setName(state, name) {
    state.name = name;
  },
  setAbilities(state, abilities) {
    state.abilities = abilities;
  },
  doLogout(state) {
    state.errors = {};
    state.token = null;
    state.email = null;
    state.name = null;
    state.abilities = null;
  }
};

export const actions = {
  doLogout({commit}, data) {
    this.$axios.post('auth/logout', data)
      .then(response => {
        commit('doLogout')
        this.$toast.info("Выход из приложения")
      }).catch(error => {
        this.$toast.error(error.response.data.message)
    });
  },

  forceLogout({commit}) {
    commit('doLogout')
  },

  async doAuth({commit}, data) {
    commit('setErrors', {})
    await this.$axios.post(Vue.prototype.$config.usersUrl.auth, data)
      .then(response => {
        this.$toast.success('Успешная авторизация...')

        commit('setToken', response.data.token);
        commit('setEmail', response.data.email);
        commit('setName', response.data.name);
        commit('setAbilities', response.data.abilities);

      }).catch(error => {
        if (error.response.status === 422) {
          commit('setErrors', error.response.data.errors)
          this.$toast.error('Проверьте введённые данные')
        }
        if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        }
      });
  },

  async doRegister({commit}, data) {
    commit('setErrors', {})
    await this.$axios.post(Vue.prototype.$config.usersUrl.register, data)
      .then(response => {
        this.$toast.success('Успешная регистрация...')

        commit('setToken', response.data.token);
        commit('setEmail', response.data.email);
        commit('setName', response.data.name);
        commit('setAbilities', response.data.abilities);

      }).catch(error => {
        if (error.response.status === 422) {
          commit('setErrors', error.response.data.errors)
          this.$toast.error('Проверьте введённые данные')
        }
        if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        }
      });
  },
};
