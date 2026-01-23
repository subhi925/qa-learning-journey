/// <reference types="cypress" />

describe("Cypress Actions Commands - Learning Practice", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  // CLICK

  it("Click on a DOM element", () => {
    cy.get(".action-btn").click();
  });

  it("Click on a DOM element multiple times", () => {
    cy.get(".action-btn").click({ multiple: true });
  });

  // TYPE

  it("Type into an input field", () => {
    cy.get(".action-email").type("test@gmail.com");
  });

  it("Type with keyboard actions", () => {
    cy.get(".action-email").clear().type("test@email.com{enter}");
  });

  // SELECT

  it("Select option from dropdown by text", () => {
    cy.get(".action-select").select("apples");
  });

  it("Select option from dropdown by index", () => {
    cy.get(".action-select").select(2);
  });

  // CHECKBOX

  it("Check first checkbox", () => {
    cy.get('.action-checkboxes [type="checkbox"]').first().check();
  });

  it("Uncheck last checkbox", () => {
    cy.get('.action-checkboxes [type="checkbox"]').last().uncheck();
  });

  // RIGHT CLICK

  it("Right click on element", () => {
    cy.get(".action-btn").rightClick();
  });

  // HOVER

  it("Hover over element", () => {
    cy.get(".action-btn").trigger("mouseover");
  });

  it("Hover out from element", () => {
    cy.get(".action-btn").trigger("mouseout");
  });

  // ASSERTIONS

  it("Assert element properties", () => {
    cy.get(".action-btn").should("be.visible");
  });
});
