<template>
  <nav class="bg-gray-200 border-b-2 fixed w-full z-10">
    <div class="flex max-w-screen-xl py-3 px-6 w-full mx-auto">
      <div class="w-1/5">
        <div class="pl-2 flex items-center flex-shrink-0 text-black mr-6 h-full">
          <nuxt-link :to="{ name: 'index' }">
            <span class="font-bold text-xl tracking-tight">dev3l</span>
          </nuxt-link>
        </div>
      </div>
      <div class="pl-6 w-4/5">
        <div class="flex h-full">
          <header-search/>
          <header-add-post/>
          <header-menu-auth/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import HeaderSearch from "./HeaderSearch";
  import HeaderAddPost from "./HeaderAddPost";
  import HeaderMenuAuth from "./HeaderMenuAuth";

  export default {
    name: 'GlobalHeader',
    components: {HeaderMenuAuth, HeaderAddPost, HeaderSearch},
    props: {}
  }
</script>

<style lang="scss"></style>
