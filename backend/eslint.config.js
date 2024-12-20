import config from "eslint-config-standard";
import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import pluginPromise from "eslint-plugin-promise";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    ignores: [
      "__tests__/*",
      "*/config/*",
      "*/db/**/*",
      ".sequelizerc",
      "*config.js"
    ],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...config.globals,
        ...config.env
      },
      parserOptions: config.parserOptions
    },
    plugins: {
      import: importPlugin,
      promise: pluginPromise,
      n: nodePlugin,
      standard: config.plugins
    },
    rules: config.rules
  }
];