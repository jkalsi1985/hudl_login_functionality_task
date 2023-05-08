import { logInPage, common } from "../support/pageObjects";

const email = Cypress.env("email");
const password = Cypress.env("password");

const users = [
  {
    email: "abcgmail.com",
    password: "1234",
  },
  {
    email: "hdsdga123%^&",
    password: "hdsdga123%^&",
  },
  {
    email: "jkalsi72@gmail.com",
    password: " ",
  },
  {
    email: " ",
    password: "testing1234",
  },
  {
    email: " ",
    password: " ",
  },
];

describe("LogIn email and password page", () => {
  beforeEach(() => {
    cy.navigateToLoginPage();
  });

  it("login succcessfully without remember me ticked", () => {
    cy.enterEmailAndPassword(email, password);
    cy.get(logInPage.logInButton).click();
    cy.get(logInPage.userItemEmailLink).contains(email);
    cy.logOutSuccessfully();
  });

  // Bug: The fields aren't pre filled when you go back to log in page.
  it.skip("login succcessfully with remember me ticked", () => {
    cy.enterEmailAndPassword(email, password);
    cy.get(logInPage.rememberTickCheckBox).click();
    cy.get(logInPage.logInButton).click();
    cy.get(logInPage.userItemEmailLink).contains(email);
    cy.logOutSuccessfully();
    cy.navigateToLoginPage();
    cy.get(logInPage.emailField).contains(email);
    cy.get(logInPage.passwordField).contains(password);
  });

  it("validation check for email and password fields", () => {
    for (let i = 0; i < users.length; i++) {
      cy.enterEmailAndPassword(users[i].email, users[i].password);
      cy.get(logInPage.logInButton).click();
      cy.get(common.loginError)
        .should("exist")
        .contains("We didn't recognize that email and/or password.");
    }
  });

  it("navigate to sign up page from logIn page ", () => {
    cy.contains(common.signUpButton).click();
    cy.url().should("contain", "https://www.hudl.com/register/signup");
  });

  it("navigate back to main page from logIn page", () => {
    cy.get(common.backButton).click();
    cy.url().should("contain", "https://www.hudl.com/");
  });
});
