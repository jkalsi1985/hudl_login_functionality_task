# Test scenario: Log In with organisation

## What is this file?

This file outlines a test scenario that we need to implement in automated e2e testing using Cypress Javascript.

Please note: I'm was unable to get error tooltip from the organisation log in page

## Pre Requisites:

1. Go to https://www.hudl.com/en_gb/
2. Click on "Log In" drop down menu button
3. Select "Hudl" option
4. Click on "Log In with an Organisation" button
5. Assert https://www.hudl.com/app/auth/login/organization page is displayed

## Tests

### TC1: Attempt to login with non organisation account

1. In the Email field, enter "jkalsi72@gmail.com"
2. Click on "Log In" button
3. Assert navigate back to https://www.hudl.com/login?e=6 page
4. Assert "This account can't log in with an organization yet. Please log in using your email and password." message is displayed

### TC2: Attempt to login with organisation account without @

1. In the Email field, enter "jkalsi72gmail.com"
2. Click on "Log In" button
3. Assert pop up is displayed stating "Please include an '@' in the email address. 'jkalsi72gmail.com.com' is missing an '@'."

### TC3: Attempt to login with organisation account with without dot com

1. In the Email field, enter abc@
2. Click on "Log In" button
3. Assert pop up is displayed stating "Please enter a part following '@'. 'abc@' is incomplete"

### TC4: Attempt to login with organisation account with wrong position

1. In the Email field, enter abc@.
2. Click on "Log In" button
3. Assert pop up is displayed stating "'.' is used at a wrong place in ''"

### TC5: Attempt to login with organisation with min characters

1. In the Email field, enter "a"
2. Assert "Log In" button is disabled
3. In the Email field, enter "ab"
4. Assert "Log In" button is disabled
5. In the Email field, enter "abc"
6. Assert "Log In" button is enabled

### TC6: Go back from log into organisation to email and password log in page

1. Click on "Log In with Email and Password" button
2. Assert https://www.hudl.com/login page is displayed

### TC7: Navigate back to username and password login

1. Click on back button
2. Assert https://www.hudl.com/login page is displayed
