/// <reference types="cypress" />

context("Navigate in Jacopos website", () => {
  beforeEach(() => {
    cy.visit("https://sharkblaze.netlify.app/karriere");
  });

  it("Navigate to Projects site", () => {
    cy.get(".liste1").contains("Projekte").click();
  });
});
