import Vue from 'vue'

export default function ({ $auth, $axios, redirect, app, store }) {
  $axios.onError(error => {
    if(error.response.status === 401) {

      $auth.logout();

      app.router.push('/');
      app.$toast.error('Ошибка авторизации. Войдите в свой аккаунт ещё раз.');
    }
  })
}
