<template>
    <div>
      123
    </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "users",
  head: {
    title: "[Dashboard] Пользователи"
  },
  // async asyncData({ params, $axios }) {
  //   return await $axios.post(Vue.prototype.$config.dashboardUrls.usersUrl.list)
  //     .then(response => {
  //       return {list: response.data};
  //     }).catch(error => {
  //       if (error.response.status === 422) {
  //         // commit('setErrors', error.response.data.errors)
  //         this.$toast.error('Проверьте введённые данные')
  //       }
  //       if (error.response.status === 404) {
  //         this.$toast.error(error.response.data.message)
  //       }
  //     });
  // }
  // async fetch({store, params}) {
  //   await store.dispatch('modules/admin/users/getUsers');
  // },
}
</script>

<style scoped>

</style>
