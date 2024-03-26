import localforage from "localforage";

describe("First launch", () => {
  it("Enter username ", () => {
    cy.visit("/");
    cy.get("#username-button").should("be.visible").click();
    cy.get("#username-invitation").contains("Попробуй еще раз...");
    cy.get("#username-input").should("be.visible").type("test");
    cy.screenshot();
    cy.get("#username-button").click();
  });
  it("Enter petname", () => {
    cy.visit("/");
    cy.get("#petname-back").should("be.visible").click();
    cy.get("#username-button").click();
    cy.screenshot();
    cy.get("#petname-button").should("be.visible").click();
    cy.screenshot();
    cy.get("#petname-input").should("be.visible").type("test");
    cy.screenshot();
    cy.get("#petname-button").click();
  });
});
describe("Second launch", () => {
  it("Check main screen", () => {
    cy.visit("/");
    cy.get("#main-container").should("be.visible");
    cy.screenshot();
  });
  it("Check playback", () => {
    cy.visit("/");
    cy.get("#animation").should("be.visible");
    cy.screenshot();
  });
  it("Check schedule screen", ()=>{
    cy.visit("/schedule");
    cy.get("#sched-container").should("be.visible");
    cy.screenshot();
    cy.get("#scroll-button").should("be.visible").click();
    cy.screenshot();
  });
  it("Check death sequence", () => {
    cy.visit("/death-screen");
    cy.get("#death-screen").should("be.visible");
    cy.screenshot();
    cy.visit("/");
    cy.get("#death-screen").should("be.visible");
    cy.get("#death-screen-button").should("be.visible").click();
    cy.get("#petname-screen").should("be.visible");
    cy.screenshot();
  });
});
