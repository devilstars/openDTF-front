<template>
    <div>
      123
    </div>
</template>

<script>
import Vue from "vue";
import userMixin from "@/mixins/userMixin";

export default {
  name: "users",
  middleware: 'checkAbilities',
  mixins: [
    userMixin
  ],
  head: {
    title: "[Dashboard] Пользователи"
  },
  created() {
    this.checkAbilitiesOrFail(['user:list2']);
  }
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
