describe('Register Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should register a new user in case of success', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('José Aldeílton Fonseca Gomes Pinto');
    cy.getByData('email-input').type('aldeiltongomes@hotmail.com');
    cy.getByData('senha-input').type('fonseca123gomes');
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();

    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!');
  });

  it.only('should show an error message in case of invalid completion of fields', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('email-input').type('aldeiltongomes@hotmail.com');
    cy.getByData('senha-input').type('12345');
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();

    cy.getByData('mensagem-sucesso').should('not.exist');
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório');
  });
});