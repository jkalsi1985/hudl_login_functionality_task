import { logInWithOrganisation, common } from "../support/pageObjects";

const email = Cypress.env("email");

describe("LogIn with organisation account page", () => {
  beforeEach(() => {
    cy.navigateToLoginWithOrganisationPage();
  });

  it("attempt to login with non organsation email account", () => {
    cy.enterOrganisationEmail(email);
    cy.url().should("contain", "/login");
    cy.contains(
      "This account can't log in with an organization yet. Please log in using your email and password."
    );
  });

  it("attempt to login without @ sign", () => {
    cy.enterOrganisationEmail("jkalsigmail.com");
    cy.url().should("contain", "/organization");
  });

  it("attempt to login without .com", () => {
    cy.enterOrganisationEmail("abc@");
    cy.url().should("contain", "/organization");
  });

  it("attempt to login with organisation account with wrong position", () => {
    cy.enterOrganisationEmail("abc@.");
    cy.url().should("contain", "/organization");
  });

  it("attempt to login with organisation with minimum characters", () => {
    cy.get(logInWithOrganisation.emailAddressField).type("a");
    cy.get(logInWithOrganisation.logInWithOrgansationButton).should(
      "be.disabled"
    );
    cy.get(logInWithOrganisation.emailAddressField).clear().type("ab");
    cy.get(logInWithOrganisation.logInWithOrgansationButton).should(
      "be.disabled"
    );
    cy.get(logInWithOrganisation.emailAddressField).clear().type("abc");
    cy.get(logInWithOrganisation.logInWithOrgansationButton).should(
      "not.be.disabled"
    );
  });

  it("navigate back to email and password login page", () => {
    cy.get(logInWithOrganisation.logInWithEmailAndPasswordButton).click();
    cy.url().should("contain", "/login");
  });

  it("go back to email and password login page", () => {
    cy.get(logInWithOrganisation.goBackButton).click();
    cy.url().should("contain", "/login");
  });
});
