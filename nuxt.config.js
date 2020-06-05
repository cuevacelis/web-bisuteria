// eslint-disable-next-line nuxt/no-cjs-in-config
// const fetch = require('node-fetch')
export default {
  mode: 'universal',
  /*
  ** Encabezados de la página
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'Jade Fashion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tienda Online de compra de Bisuteria y accesorios de moda con todo tipo de pulseras, collares, anillos y otras joyas' },
      { name: 'robots', content: 'index' }
    ],
    noscript: [
      { innerHTML: 'Body No Scripts', body: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', async: true }
    ]
  },
  /*
  ** Personaliza el color de la barra de progreso
  */
  // loading: { color: '#fff' },
  loading: '~/components/componentes_de_control/LoadingPage.vue',
  loadingIndicator: {
    name: 'rotating-plane',
    color: '#3B8070',
    background: 'white'
  },
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
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/vue-progressive-image', mode: 'client' }
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
    '@nuxt/http',
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
  http: {
    // proxyHeaders: false
  },
  /*
  ** Configuración de compilación
  */
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  generate: {
    /* async routes () {
      const productos = await fetch('/data/' + 'aretes' + '.json').then(res => res.json())
      const routes = productos.map(productos => `/productos/${productos.Categoria}`)

      return ['/'].concat(routes)
    } */
    routes: [
      'productos/Aretes'
    ]
  },
  build: {
    /*
    ** Puede ampliar la configuración del Webpack aquí
    */
    extend (config, ctx) {},
    transpile: [/^vue-awesome/]
  }
}
