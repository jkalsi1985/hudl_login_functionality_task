import { resetMyPasword, common } from "../support/pageObjects";

describe("Reset my password page", () => {
  beforeEach(() => {
    cy.navigateToResetMyPasswordPage();
  });

  it("reset password successfully", () => {
    cy.resetPassword("jkalsi72@gmail.com");
    cy.url().should("contain", "https://www.hudl.com/login/check-email");
    cy.contains("Check Your Email");
  });

  it("attempt reset my password without an email address", () => {
    cy.get(resetMyPasword.sentResetPasswordButton).should("be.disabled");
  });

  it("attempt reset my password an email address don't exist", () => {
    cy.resetPassword("jkalsi72sdsdsd@gmail.com");
    cy.get(resetMyPasword.resetPasswordErrorDisplay)
      .should("exist")
      .contains(
        "That email address doesn't exist in Hudl. Check with your coach to ensure they have the right email address for you."
      );
  });

  it("attempt reset my password with invalid email address", () => {
    cy.resetPassword("jkalsi72sdsdsd");
    cy.get(resetMyPasword.resetPasswordErrorDisplay)
      .should("exist")
      .contains(
        "That isn't a valid email address. Make sure to use the email@domain.com format."
      );
  });

  it("navigate to sign up page from reset my password page ", () => {
    cy.contains(common.signUpButton).click();
    cy.url().should("contain", "https://www.hudl.com/register/signup");
  });

  it("navigate back to main page from reset my password page", () => {
    cy.get(common.backButton).click();
    cy.url().should("contain", "https://www.hudl.com/");
  });
});
