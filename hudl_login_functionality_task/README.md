Description of the task
The purpose of this task is to implement automation test for the login functionality from hudl.com.

The project was implement on a Mac using Cypress in Javascript because makes it easier to test UI, easy to debug to tests and you can inspect elements at run time. Cypress only supports Javascript which I'm familar with.

Pre-requisites

- node (https://nodejs.org/en/download)
- cypress (https://docs.cypress.io/guides/getting-started/installing-cypress)

Instructions to run automation tests

- On a Mac
  - run `npm install` to install dependencies
  - use the command `npm run tests`

Comments/Improvements

- Check responsivness:

* Use `cy.viewport(550, 750)` to test different screen resolution and different devices
* Accessibility testing - this will be manual testing with voiceOver, text-to-speech etc
* Finding workaround for testing the hoover drop down to logout
* Find workaround for finding element with error tooltip on login organisation account page

Please note: Test Scenarios are listed in test scenarios_reset_password.md, test_scenario_email_password_page.md and test_scenario_login_with_organisation.md
