module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  plugins: [],
  rules: {},
};
