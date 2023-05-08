// -- This command pre fill email and password --
Cypress.Commands.add("enterEmailAndPassword", (email, password) => {
  cy.get("#email").clear().type(email);
  cy.get("#password").clear().type(password);
});

// -- This command login with an organisation --
Cypress.Commands.add("enterOrganisationEmail", (organisationEmail) => {
  cy.get("#uniId_1").type(organisationEmail);
  cy.get('[data-qa-id="log-in-with-sso"]').click();
});

// -- This command to enter an email address to reset my password --
Cypress.Commands.add("resetPassword", (resetPasswordEmail) => {
  cy.get('[data-qa-id="password-reset-input"]')
    .clear()
    .type(resetPasswordEmail);
  cy.get('[data-qa-id="password-reset-submit-btn"]').click();
});

// -- This command to navigate login page --
Cypress.Commands.add("navigateToLoginPage", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get('[data-qa-id="login-select"]').click();
  cy.get(
    ".mainnav__actions > .mainnav__container > .mainnav__sub > .subnav__inner > :nth-child(1) > .subnav__items > .subnav__item"
  ).click();
  cy.url().should("contain", "/login");
});

// -- This command to navigate login with organisation --
Cypress.Commands.add("navigateToLoginWithOrganisationPage", () => {
  cy.navigateToLoginPage();
  cy.get(".uni-link--wrapper > .uni-button").click();
  cy.url().should(
    "contain",
    "https://www.hudl.com/app/auth/login/organization"
  );
});

// -- This command to navigate reset my password --
Cypress.Commands.add("navigateToResetMyPasswordPage", () => {
  cy.navigateToLoginPage();
  cy.get('[data-qa-id="need-help-link"]').click();
  cy.url().should("contain", "https://www.hudl.com/login/help#");
});

// -- This command for logout --
Cypress.Commands.add("logOutSuccessfully", (email, password) => {
  cy.visit("https://www.hudl.com/logout");
  cy.get('[data-qa-id="login-select"]').should("be.visible");
  cy.url().should("contain", "https://www.hudl.com/");
});
