/* used as temporary due to this error: https://github.com/nuxt/nuxt/issues/15412, 
source: https://github.com/BayBreezy/vuetify3-nuxt3-sass-customized?tab=readme-ov-file */

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response) => {
    response.body = response.body.replaceAll("/_nuxt/\0", "/_nuxt/");
  });
});
