export default ({ store, route, redirect }) => {
  console.log(store.state.modules.user.auth.token)
  if (process.client) {
    console.log('here');
  }
}
