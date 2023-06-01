describe('User"s journey', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should log in, make a transfer and log out', () => {
    cy.getByData('botao-login').click();

    cy.getByData('email-input').type('valvanogabryel@gmail.com');
    cy.getByData('senha-input').type('123');

    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByData('botao-sair').click();

    cy.location('pathname').should('eq', '/');
  });

  it('should be possible to register, login, make a transfer and logout', () => {
    cy.getByData('botao-cadastro').click();

    cy.getByData('nome-input').type('Gabryel Valvano');
    cy.getByData('email-input').type('gabryelval@gmail.com');
    cy.getByData('senha-input').type('123');
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();

    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');

    cy.location('pathname').should('eq', '/');

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('gabryelval@gmail.com');
    cy.getByData('senha-input').type('123');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Depósito');
    cy.getByData('form-input').type('1200');
    cy.getByData('realiza-transacao').click();
    cy.getByData('lista-transacoes').find('li').last().contains('R$ 1200');

    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});
