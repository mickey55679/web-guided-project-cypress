const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 500,
  viewportHeight: 500,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
