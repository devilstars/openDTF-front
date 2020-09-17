<template>
  <div class="mt-5">
    <sort-tool/>
    <template v-for="(item, index) in getPosts.data">
      <post-item :key="'post_' + index + '_' + item.id"
                 :data="item" />
    </template>
    <template v-if="!getLoading">
      <client-only>
        <infinite-loading @distance="1" @infinite="infiniteLoader">
          <div slot="no-more" class="my-5">
            <span class="my-5 text-gray-500">
                Больше нет записей :)
            </span>
          </div>
          <div slot="no-results">
            <span class="my-5 text-gray-500">
                Нет данных :/
            </span>
          </div>
        </infinite-loading>
      </client-only>
    </template>
  </div>
</template>

<script>

  import InfiniteLoading from 'vue-infinite-loading';
  import SortTool from "../components/posts/SortTool";
  import PostItem from "../components/posts/PostItem";
  import { mapGetters, mapActions } from "vuex";

  export default {
    auth: false,
    components: {
      PostItem,
      SortTool,
      InfiniteLoading,
    },
    data() {
      return {}
    },
    async fetch ({ store, params }) {
      await store.dispatch('modules/posts/fetchPosts');
    },
    mounted() {},
    computed: {
      ...mapGetters({
        getPosts: 'modules/posts/getPosts',
        getLoading: 'modules/posts/getLoading'
      })
    },
    methods: {
      ...mapActions({
        fetchPosts: 'modules/posts/fetchPosts',
        infiniteLoader: 'modules/posts/infiniteLoader'
      }),
    }
  }
</script>

<style>
</style>

