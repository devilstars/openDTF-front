import Vue from 'vue'

export default function ({ $axios, redirect, app }) {
  $axios.onError(error => {
    // TODO do magic here
    // app.$toast.error(error.response.data.message);
  })
}
