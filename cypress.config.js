const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5su791',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de cypress',
      reportPageTitle: 'Projeto do curso de cypress',
      
    },

  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
