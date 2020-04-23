<template>
  <div class="ml-3">
    <div class="h-10 w-10 relative"
         v-click-outside="handleFocusOut">
      <div class="border-2 border-purple-200 rounded cursor-pointer hover:border-purple-300" @click.prevent="toggleDropdown">
        <img src="https://api.adorable.io/avatars/40/mr.devilstar@gmail.com" alt="">
      </div>
      <template v-if="showDropdown">
        <div class="bg-white border w-40 absolute mt-1 right-0">
          <ul>
            <li>
              <a href="#" class="text-sm px-2 py-1 block hover:bg-gray-100">Элемент #01</a>
            </li>
            <li>
              <a href="#" class="text-sm px-2 py-1 block hover:bg-gray-100 bg-gray-200">Элемент #02</a>
            </li>
            <li>
              <a href="#" class="text-sm px-2 py-1 block hover:bg-gray-100">Элемент #03</a>
            </li>
            <li>
              <a href="#" class="text-sm px-2 py-1 block hover:bg-gray-100">Элемент #04</a>
            </li>
            <li>
              <a href="#" class="text-sm px-2 py-1 block hover:bg-gray-100 bg-red-100" @click.prevent="logout">Выход</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import ClickOutside from 'vue-click-outside';

  export default {
    name: "HeaderProfile",
    directives: {
      ClickOutside
    },
    data() {
      return {
        showDropdown: false,
      }
    },
    methods: {
      ...mapActions({
        doLogout: 'modules/user/auth/doLogout'
      }),
      logout() {
        this.doLogout();
        this.$router.push('/');
      },
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      handleFocusOut() {
        this.showDropdown = false;
      }
    }
  }
</script>

<style scoped>

</style>
