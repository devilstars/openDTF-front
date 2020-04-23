import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      token: 'modules/user/auth/getToken',
    }),
    checkAuth() {
      return !!this.token;
    }
  }
}
