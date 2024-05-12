const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.onemap.gov.sg/',
    env(){
      {
        mobileViewportWidthBreakpoint: 414
    }
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/leftNavBarMenu_spec/*.js'
  },
});
