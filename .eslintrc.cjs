module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    "plugin:astro/recommended",
    'prettier'
  ],
  plugins: ['prettier'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Enable this plugin
      plugins: ["astro"],
      env: {
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      rules: {
        // Enable recommended rules
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        "prettier/prettier": "off",
      },
    },
  ],
}
