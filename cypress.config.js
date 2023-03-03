const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILOSAUR_API_KEY: "Psi3lJ7yF4qsKgFo",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
