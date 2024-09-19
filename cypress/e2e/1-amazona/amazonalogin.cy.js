/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    cy.get(".row").contains("Sign In").click();
    cy.wait(1000);
    cy.get("#email").type("admin@example.com");
    cy.wait(1000);
    cy.get("#password").type("1234");
    cy.wait(1000);
    cy.get(".primary").contains("Sign In").click();
    cy.get(".row").contains("Admin").click();
  });
});
