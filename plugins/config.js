import Vue from 'vue';

let apiUrl = "http://opendtf.test/api/";

Vue.prototype.$config = {
  apiUrl: 'http://opendtf.test/api/',

  postsUrl: {
    list: 'posts'
  },
  usersUrl: {
    auth: 'auth/login',
    register: 'auth/register',
  },
  categoriesUrl: {
    list: 'categories'
  },

  /* dashboard urls  */
  dashboardUrls: {
    usersUrl: {
      list: 'dashboard/users'
    }
  }
  /* end of dashboard urls */
}
