const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.onemap.gov.sg/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: '**/*.js'
  },
});
