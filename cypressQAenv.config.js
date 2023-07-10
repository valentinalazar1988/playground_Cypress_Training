const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');
module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",
    e2e: {
        baseUrl: "https://example.cypress.io/",
        actionsPage: "commands/actions",
        locationPage: "commands/location",
        envTag: "cypressQA",
        todoPage: "todo",
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', verifyDownloadTasks);
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        viewportWidth: 1920,
        viewportHeight: 1080
    },
});