import Vue from 'vue'

export default function ({ $axios, redirect, app, store }) {
  $axios.onError(error => {
    if(error.response.status === 401) {
      if (store.state.modules.user.auth.token) {
        store.dispatch('modules/user/auth/forceLogout');
      }
      app.router.push('/');
      app.$toast.error('Ошибка авторизации. Войдите в свой аккаунт ещё раз.');
    }
  })
}
