// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,

  sourcemap: {
    server: false,
    client: false,
  }, // sourcemap turned to false due to this issue: https://github.com/nuxt/nuxt/issues/15412

  devtools: { enabled: true },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: "./assets/scss/settings.scss",
            },
          })
        );
      });
    }, //https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
    "@nuxtjs/google-fonts", //https://google-fonts.nuxtjs.org/
    "@pinia/nuxt", //https://pinia.vuejs.org/ssr/nuxt.html
  ],

  css: [
    "vuetify/styles",
    "vuetify/lib/styles/main.sass",
    "~/assets/scss/app.scss",
  ],

  googleFonts: {
    families: {
      Poppins: [500, 600, 700],
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
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
});
