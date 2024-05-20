import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    components: {},
  });

  nuxtApp.vueApp.use(vuetify);
});
