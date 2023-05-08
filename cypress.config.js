const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    baseUrl: "https://www.hudl.com/en_gb/",
    email: "jkalsi72@gmail.com",
    password: "testing1234",
  },
});
