import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls";
let ls = new SecureLS({ encodingType: 'rc4', isCompression: true, encryptionSecret: 'Zj8,;ZN?M><F7dL+' });

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
      paths: [
        'modules.user'
      ]
    })(store)
  })
}
