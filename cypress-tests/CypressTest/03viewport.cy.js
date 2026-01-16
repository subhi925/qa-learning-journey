//test in different view
['phone-8', 'ipad-mini', 'samsung-s10'].forEach((viewport) => {
  it("should viewport resize correctly", () => {
    cy.viewport(viewport);

    cy.visit("https://www.google.com");
  });
});
