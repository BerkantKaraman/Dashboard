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
            primary: "#0C615E",
            textColor: "#343434",
            textBackground: "#edf6f2",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
