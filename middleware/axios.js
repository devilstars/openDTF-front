export default function ({ store, $axios }) {
  /**
   * Bearer token
   */
  $axios.setToken(store.state.modules.user.auth.token, 'Bearer');
}
