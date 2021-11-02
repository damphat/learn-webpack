/**
 * @type import('eslint').Linter.Config
 */
module.exports = {
  // root: false,
  env: {
    browser: false,
    node: false,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {},
}
