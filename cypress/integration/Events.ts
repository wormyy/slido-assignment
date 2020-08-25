// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context("Add event to the list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Adds an event", function () {
    // Enter data to the form
    cy.get("[data-testid=input-name]").type("React Summit");
    cy.get("[data-testid=input-place]").type("Amsterdam");
    cy.get("[data-testid=input-date]").type("2021-06-20");
    cy.get("[data-testid=button-submit]").click();

    // Verify that we created the event
    cy.contains("React Summit");
  });
});
