import colors from 'vuetify/lib/util/colors';
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          primary: colors.lightBlue,
          secondary: colors.grey.darken1,
          accent: colors.pink.darken1,
          error: colors.red.accent3,
          background: colors.indigo.lighten5,
          info: colors.teal.darken1,
        },
        dark: {
          primary: colors.blue.darken4,
          background: colors.indigo.base,
          info: colors.teal.lighten1,
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
