require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bioskop-online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // for local server mobile testing purpose, enable this
  // server: {
  //   host: '0.0.0.0',
  //   port: 8000
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/modal',
    '~/plugins/tooltip',
    '~/plugins/touch',
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/clever-tap', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    '@nuxtjs/auth-next'
  ],
  
  auth: {
    // Options
    strategies: {
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: process.env.FACEBOOK_CLIENT_ID,
        scope: ['public_profile', 'email'],
        responseType: 'code',
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
        responseType: 'code',
      },
      local: {
        token: {
          property: 'data.token',
          maxAge: 3600
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: { url: '/api/v1/login', method: 'post' },
          user: { url: '/api/v1/auth/me', method: 'get' },
          refresh: { url: '/api/v1/refresh', method: 'post' },
          logout: false
        }
      },
    },
    redirect: {
      login: '',
      logout: '/',
      callback: '/auth/loginWithGoogle',
      home: '/auth/loginWithGoogle'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Storybook Configuration: https://storybook.nuxtjs.org/api/options
  storybook: {
    stories: ['~/stories/**/*.stories.js', '~/stories/**/*.mdx'],
    parameters: {
      backgrounds: {
        values: [
          { name: 'primary', value: '#011228' },
          { name: 'secondary', value: '#9BC7FD' },
        ],
      },
    },
  },

  googleFonts: {
    families: {
      Montserrat: true,
    }
  },

  device: {
    refreshOnResize: true
  }
}
