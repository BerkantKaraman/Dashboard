// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  modules:[
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true,          
          styles: {
          configFile: './assets/scss/settings.scss',
        },
       }))
      })
    },

    '@nuxtjs/google-fonts', 
    '@nuxt/image'
  ],

  css: [
    'vuetify/styles',
    'vuetify/lib/styles/main.sass',
    '~/assets/scss/app.scss',
  ],

  googleFonts: {
    families: {
      Poppins: true, 
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/mixins.scss";',
        },
      },
    },
  },
})
