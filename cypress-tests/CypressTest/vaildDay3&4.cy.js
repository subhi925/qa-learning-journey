describe("Login test", () => {
  it("Login with valid credentials", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();

    cy.contains(
      "Welcome to the Secure Area. When you are done click logout below."
    ).should("be.visible");
  });
});
