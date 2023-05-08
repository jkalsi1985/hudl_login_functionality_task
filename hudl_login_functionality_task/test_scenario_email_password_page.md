# Test scenario: Log in Hudl with Email and Password page

## What is this file?

This file outlines a test scenario that we need to implement in automated e2e testing using Cypress Javascript.

## Pre Requisites:

1. Go to https://www.hudl.com/en_gb/
2. Click on "Log In" drop down menu button
3. Select "Hudl" option
4. Assert navigate to https://www.hudl.com/login? page

## Tests

### TC1: Login and logout into hudl successfully without remember me ticked

Steps:

1. In the Email field, type "jkalsi72@gmail.com"
2. In the Password field, type "testing1234"
3. Click on "Log In" button
4. Assert "Jag s" is displayed in global user item display name
5. Call logout_sucessfully() function

### TC2: Login and logout into hudl successfully with remember me ticked

Steps:

1. In the Email field, type "jkalsi72@gmail.com"
2. In the Password field, type "testing1234"
3. Tick "Rememeber me" checkbox
4. Click on "Log In" button
5. Assert "Jag s" is displayed in global user item display name
6. Call logout_sucessfully() function
7. Log back to login page
8. Assert Email field is pre filled with "jkalsi72@gmail.com"
   9, Assert Password field is pre filled with "testing1234" (hidden) is

Bug:
When you go back to log i page, in the fields aren't pre filled there empty instead

### TC3: Attempt to login with invalid values

1. Enter Email and Password fields with invalid details
   | Email | Password |
   | <empty> | <empty> |
   | abcgmail.com | 1234 |
   | hdsdga123%^& | hdsdga123%^& |
   | jkalsi72@gmail.com | <empty> |
   | <empty> | testing1234 |
2. Click on "Log In" button
3. Assert "We didn't recognize that email and/or password." error message is displayed

Error message and UI improvement suggestions:

1. I notice there is inconsistent of error message between login, reset password and login with organisation pages when you enter invalid email address.
   For example on reset password the error message is more clearer to the user "That isn't a valid email address. Make sure to use the email@domain.com format.".
   Whereas on login with organisation page, you have error pop up message stating "Please include @ in the email address".

### TC4: Navigate to sign up page

1. Click on "Sign up" link
2. Assert https://www.hudl.com/register/signup page is displayed

### TC5: Navigate back to Hudl main page

1. Click on back button
2. Assert https://www.hudl.com/en_gb/ page is displayed

## Function

### logout_sucessfully()

1. Click on global user menu
2. Select "Log out" button
3. assert returns to https://www.hudl.com/en_gb/
4. Assert "Log in" button is displayed on top right
