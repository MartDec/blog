import colors from 'vuetify/lib/util/colors';
import { defineNuxtConfig } from 'nuxt/config';

const vuetifyOptions = {
  vuetifyOptions: {
    icons: {
      iconfont: 'mdi',
    },
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
  },

  moduleOptions: {
    /* nuxt-vuetify module options */
    treeshaking: true,
    useIconCDN: true,

    /* vite-plugin-vuetify options */
    styles: 'sass',
    autoImport: true,
    useVuetifyLabs: false,
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [['@invictus.codes/nuxt-vuetify', vuetifyOptions]],
});
