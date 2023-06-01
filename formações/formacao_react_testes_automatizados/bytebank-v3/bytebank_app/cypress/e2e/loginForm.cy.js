describe('Login form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not allow an invalid email', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('gabryelval@gmail');
    cy.getByData('senha-input').type('gabryelval1');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido');
  });

  it('should not allow the input to be empty', () => {
    cy.getByData('botao-login').click();
    cy.getByData('senha-input').type('gabryelval1');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório');
  });
});