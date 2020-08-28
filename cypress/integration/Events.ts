// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context("Add event to the list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Adds an event", function () {
    const name = "React Summit";
    const place = "Amsterdam";
    const description = "It's gonna be fun";
    const date = "2021-01-05";

    // Enter data to the form
    cy.get("[data-test-id=input-name]").type(name);
    cy.get("[data-test-id=input-place]").type(place);
    cy.get("[data-test-id=input-description]").type(description);
    cy.get("[data-test-id=input-date]").type(date);
    cy.get("[data-test-id=button-submit]").click();

    // Verify that we created the event
    cy.contains(name);
    cy.contains(place);
    cy.contains("January 5, 2021");

    // Expand the card to see the description
    cy.contains("Show details").click();
    cy.contains(description);
  });
});
