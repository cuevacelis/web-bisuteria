
export default {
  mode: 'spa',
  router: {
    base: '/'
  },
  /*
  ** Encabezados de la página
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
      }
    ],
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
  /*
  ** Complementos para cargar antes de montar la aplicación
  */
  plugins: [
    '~/plugins/scriptsPlantilla',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    //'@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  //PWA
  /*pwa: {
    workbox: {
      workbox: false
    }
  },*/
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
    extend (config, ctx) {
    }
  }
}
