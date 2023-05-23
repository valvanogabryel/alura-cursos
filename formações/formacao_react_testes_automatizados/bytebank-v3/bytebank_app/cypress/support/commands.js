Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('verifyText', (selector, text) => {
  return cy.get(`[data-test=${selector}]`).contains(text);
});