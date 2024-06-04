import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme: {
          dark: false,
          colors: {
            primary: "#e43823",
            textColor: "#2d2d34",
            textBackground: "#fadfdc",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
