import Vue from 'vue';

let apiUrl = "http://opendtf.test/api/";

Vue.prototype.$config = {
  apiUrl: 'http://opendtf.test/api/',

  postsUrl: {
    list: 'posts'
  }
}
