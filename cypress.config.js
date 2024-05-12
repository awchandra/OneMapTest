const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.onemap.gov.sg/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/homePage_spec/*.js', 'cypress/e2e/leftNavBarMenu_spec/*.js']
  },
});
