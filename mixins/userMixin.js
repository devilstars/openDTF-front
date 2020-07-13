import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      token: 'modules/user/auth/getToken',
      abilities: 'modules/user/auth/getAbilities'
    }),

    checkAuth() {
      return !!this.token;
    },
  },
  methods: {
    checkAbilities(abilities) {
      let rule = (e, index, array) => {
        return this.abilities.includes(e);
      };

      return abilities.every(rule);
    }
  }
}
