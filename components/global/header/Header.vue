<template>
  <nav class="bg-gray-200 border-b-2 fixed w-full z-10">
    <div class="flex max-w-screen-xl py-3 px-1 md:px-6 w-full mx-auto">
      <div class="md:w-1/4 lg:w-1/5">
        <div class="pl-2 flex items-center flex-shrink-0 text-black mr-6 h-full">
          <nuxt-link :to="{ name: 'index' }">
            <span class="font-bold text-xl tracking-tight">dev3l</span>
          </nuxt-link>
        </div>
      </div>
      <div class="pl-2 md:pl-6 w-4/5 md:w-3/4 lg:w-4/5">
        <div class="flex h-full">
          <header-sidebar-toggle/>
          <header-search/>
          <header-add-post/>
          <template v-if="!loading">
            <header-menu-auth v-if="!checkAuth"/>
            <header-profile v-if="checkAuth" />
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import HeaderSearch from "./HeaderSearch";
  import HeaderAddPost from "./HeaderAddPost";
  import HeaderMenuAuth from "./HeaderMenuAuth";
  import HeaderSidebarToggle from "./HeaderSidebarToggle";
  import HeaderProfile from "./HeaderProfile";

  export default {
    name: 'GlobalHeader',
    components: {HeaderProfile, HeaderSidebarToggle, HeaderMenuAuth, HeaderAddPost, HeaderSearch},
    props: {},
    data() {
      return {
        loading: true,
      }
    },
    mounted() {
      this.loading = false;
    }
  }
</script>

<style lang="scss"></style>
