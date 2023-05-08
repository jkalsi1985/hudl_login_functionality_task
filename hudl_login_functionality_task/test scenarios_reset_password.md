# Test scenario: Reset password pages

## What is this file?

This file outlines a test scenario that we need to implement in automated e2e testing using Cypress Javascript.

## Pre Requisites:

1. Go to https://www.hudl.com/en_gb/
2. Click on "Log In" drop down menu button
3. Select "Hudl" option
4. Click on "Need help?" link
5. Assert goes to https://www.hudl.com/login/help#

## Tests

### TC1: Reset your password with valid email address

1. In Email field, enter "jkalsi72@gmail.com"
2. Click on "Send Password Reset" button
3. Assert "If you don't see the email, check your junk or spam folders." error message is displayed
4. Click on "Back" button
5. Assert return to https://www.hudl.com/login page

### TC2: Attempt to reset password without enter an email address

1. Leave Email field blank
2. Assert "Send Password Reset" button is disabled

### TC3: Attempt reset password with invalid email address

1. In Email field, enter "jkalsi72637863gmail.com"
2. Click on "Send Password Reset" button
3. Assert "That isn't a valid email address. Make sure to use the email@domain.com format." is displayed

### TC4: Navigate to sign up page from reset password page

- Click on "Sign up" button
- Assert https://www.hudl.com/register/signup is displayed

### TC5: Navigate back to log In page from reset password page

- Click on "Back" button
- Assert https://www.hudl.com/login is displayed
