<template>
  <div class="border-t-2" v-if="!loading">
        <span class="block p-3 pl-2 text-gray-600 text-sm">
            Подписки
        </span>
    <ul>
      <template v-for="(item, index) in items.data">
        <li :key="'sidesub_' + index">
          <a href="#" class="flex p-2 text-gray-700 font-semibold hover:bg-gray-200">
            <img :src="'/img/category-image-not-found.png'" :alt="item.title" class="h-6 mr-3">
            {{ item.title }}
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "SidebarSubs",
    data() {
      return {}
    },
    async fetch () {
      await this.fetchCategories();
    },
    computed: {
      ...mapGetters({
        items: 'modules/categories/getCategories',
        loading: 'modules/categories/getLoading'
      })
    },
    methods: {
      ...mapActions({
        fetchCategories: 'modules/categories/fetchCategories',
      }),
    }
  }
</script>

<style scoped>

</style>
