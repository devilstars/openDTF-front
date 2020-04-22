import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      reducer: (persistedState) => {
        const stateFilter = Object.assign({}, persistedState)

        /* список избыточных данных в постоянном хранилище */
        delete stateFilter['modules']['posts']

        return stateFilter
      }
    })(store)
  })
}
