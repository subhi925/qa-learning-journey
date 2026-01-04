describe("Login test", () => {
  it("Login with invalid credentials", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.get("#username").type("tomsmith2");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();

    cy.contains("Your username is invalid!").should("be.visible");
  });
});
