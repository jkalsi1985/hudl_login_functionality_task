const logInPage = {
  logInButton: "#logIn",
  userItemEmailLink: ".hui-globaluseritem__email",
  rememberTickCheckBox: ".uni-form__label--check",
  emailField: "#email",
  passwordField: "#passworrd",
};

const logInWithOrganisation = {
  logInWithEmailAndPasswordButton:
    '[data-qa-id="log-in-with-email-and-password"]',
  goBackButton: '[data-qa-id="go-back"]',
  emailAddressField: "#uniId_1",
  logInWithOrgansationButton: '[data-qa-id="log-in-with-sso"]',
};

const resetMyPasword = {
  sentResetPasswordButton: '[data-qa-id="password-reset-submit-btn"]',
  resetPasswordErrorDisplay: '[data-qa-id="password-reset-error-display"]',
};

const common = {
  loginError: ".uni-text",
  signUpButton: "Sign up",
  backButton: ".styles_backIconContainer_MhkioW9m8rx70X7CIGuws",
};

export { logInPage, common, logInWithOrganisation, resetMyPasword };
