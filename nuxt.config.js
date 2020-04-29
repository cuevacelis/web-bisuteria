
export default {
  mode: 'universal',
  /*
  ** Encabezados de la página
  */
  head: {
    title: 'Jade Fashion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Personaliza el color de la barra de progreso
  */
  loading: { color: '#fff' },
  /*
  ** CSS global
  */
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  styleResources: {
    scss: '@/assets/scss/init.scss'
  },
  /*
  ** Complementos para cargar antes de montar la aplicación
  */
  plugins: [
    // '~plugins/scriptsPlantilla',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  // PWA
  /* pwa: {
    workbox: {
      workbox: false
    }
  }, */
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Configuración de compilación
  */
  build: {
    /*
    ** Puede ampliar la configuración del Webpack aquí
    */
    extend (config, ctx) {},
    transpile: [/^vue-awesome/]
  }
}
