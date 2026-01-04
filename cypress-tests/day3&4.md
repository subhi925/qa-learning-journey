Day 3 & Day 4 – Cypress Learning
What I learned

In these two days, I started learning Cypress automation.

I learned how to:

Open a website using cy.visit()

Find elements using cy.get() with CSS selectors

Type text into inputs using cy.type()

Click buttons using cy.click()

Check messages on the screen using cy.contains()

Validate results using .should("be.visible")

Tests I created
1. Login with invalid credentials

Open login page

Enter wrong username

Enter password

Click login

Check that error message is shown

This test verifies that the system shows an error message when login is not valid.

2. Login with valid credentials

Open login page

Enter correct username

Enter correct password

Click login

Check that success message is visible

This test verifies that the user can login successfully.

What I understand now

Each test checks one scenario

Cypress helps test the user behavior

Assertions help confirm what the user sees on the screen

I am learning step by step and practicing by doing

Tools & Skills

Cypress (basic)

CSS selectors

Basic automation logic

QA mindset
