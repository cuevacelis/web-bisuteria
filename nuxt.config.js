// eslint-disable-next-line nuxt/no-cjs-in-config
// const fetch = require('node-fetch')
// const url = 'https://web-bisuteria.now.sh'
export default {
  mode: 'universal', // Mejora el SEO
  // mode: 'spa', // No mejora el SEO
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
      { innerHTML: 'Gracias por Visitar a JadeFashon, actualiza tu navegador para JavaScript', body: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/a076d05399.js', defer: true }
    ]
  },
  /*
  ** Personaliza el color de la barra de progreso
  */
  // loading: { color: '#fff' },
  loading: '~/components/componentes_de_control/LoadingPage.vue',
  loadingIndicator: {
    name: 'nuxt',
    color: '#3B8070',
    background: 'white'
  },
  /*
  ** CSS global
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/style.css'
  ],
  styleResources: {
  },
  /*
  ** Complementos para cargar antes de montar la aplicación
  */
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'server' }
    // { src: '@/plugins/vue-progressive-image', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: 'tailwind.config.js',
    cssPath: '@/assets/css/tailwind.css',
    exposeConfig: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/http',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }]
    // Doc: https://github.com/nuxt-community/dotenv-module
    // '@nuxtjs/dotenv'

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
  /* axios: {
  }, */
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
      const productos = await fetch(url + '/data/' + 'Aretes' + '.json').then(res => res.json())
      const routes = productos.map(productos => `/productos/${productos.Categoria}`)

      return ['/'].concat(routes)
    } */
    fallback: '404.html',
    routes: [
      'productos/Aretes/',
      'productos/Aretes/1',
      'productos/Aretes/2',
      'productos/Aretes/3',
      'productos/Aretes/4',
      'productos/Aretes/5',
      'productos/Aretes/6',
      'productos/Aretes/7',
      'productos/Relojes/',
      'productos/Collares/',
      'productos/Maquillaje/',
      'productos/SanValentin/'
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
