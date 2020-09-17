module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - openDTF',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'openDTF front' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  axios: {
    baseURL: 'http://opendtf.test/api',
  },
  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://opendtf.test'
      },
    }
  },
  router: {
    middleware: ['auth']
  },
  plugins: [
    { src: '~/plugins/mixins.js', ssr: true },
    { src: '~/plugins/config.js', ssr: true },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/localStorage.js', ssr: false },
  ],
  toast: {
    theme: "outline",
    duration: 5000
  }
}

