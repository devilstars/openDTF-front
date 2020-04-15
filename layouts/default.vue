<template>
  <div id="app" class="h-full">
    <global-header/>
    <div class="flex max-w-screen-xl w-full mx-auto px-1 md:px-6 h-full pt-header">
      <div class="tm-sidebar md:w-1/4 lg:w-1/5 border-r-2"
           :class="{'tm-active': showSidebar}"
           v-click-outside="setShowSidebarOutside"> <!-- .tm-active to toggle -->
        <sidebar/>
      </div>
      <div class="w-full md:w-3/4 lg:w-3/5 px-2 md:px-6">
        <nuxt/>
      </div>
      <div class="hidden lg:block w-1/5 border-l-2">
        <feed/>
      </div>
    </div>
  </div>
</template>

<script>
  import GlobalHeader from "../components/global/header/Header";
  import Sidebar from "../components/global/sidebar/Sidebar";
  import Feed from "../components/global/Feed/Feed";
  import {mapGetters, mapActions} from 'vuex';
  import ClickOutside from "vue-click-outside";

  export default {
    components: {Feed, Sidebar, GlobalHeader},
    directives: {
      ClickOutside
    },
    computed: {
      ...mapGetters({
        showSidebar: 'sidebar/getShowSidebar'
      })
    },
    methods: {
      ...mapActions({
        setShowSidebarOutside: 'sidebar/setShowSidebarOutside'
      })
    }
  }
</script>

<style scoped>
  @media all and (max-width: 767px) {
    .tm-sidebar {
      position: fixed;
      z-index: 1;
      width: 230px;
      left: -230px;
      background: white;
      transition: left 300ms cubic-bezier(0.49, -0.01, 0.31, 0.93)
    }

    .tm-sidebar.tm-active {
      left: 0;
    }
  }
</style>
