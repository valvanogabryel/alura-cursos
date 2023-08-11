describe('journey of the user', () => {
  it('must allow a user to access the application, perform a transaction and log out', () => {
    const newTransaction = {
      tipoTransacao: Math.random() < 0.5 ? 'Depósito' : 'Transferência',
      valor: String(Math.floor(Math.random() * (100 - 10 + 1)) + 10),
    };

    cy.visit('/');

    cy.fixture('usuarios').then((userList) => {
      const user = userList[1];
      cy.login(user.email, user.senha);
      cy.visit('/home');
      cy.url().should('include', '/home');
      cy.contains(user.nome).should('be.visible');
    });

    cy.getByData('titulo-boas-vindas')
      .should('be.visible')
      .and('contain', 'Bem vindo de volta!');

    cy.getByData('select-opcoes')
      .select(newTransaction.tipoTransacao)
      .should('have.value', newTransaction.tipoTransacao);

    cy.getByData('form-input')
      .type(newTransaction.valor)
      .should('have.value', newTransaction.valor);

    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes')
      .find('li')
      .last()
      .contains(newTransaction.valor);

    cy.window().then((win) => {
      const userId = win.localStorage.getItem('userId');

      cy.request({
        method: 'GET',
        url: `http://localhost:8000/users/${userId}`,
        failOnStatusCode: false,
      }).then((response) => {
        const { transacoes } = response.body;
        const lastTransaction = transacoes[transacoes.length - 1];
        expect(response.status).to.eq(200);
        expect(transacoes).is.not.empty;
        expect(transacoes).to.have.lengthOf.at.least(1);
        expect(lastTransaction.valor).to.be.eq(newTransaction.valor);
        expect(lastTransaction).to.deep.include(newTransaction);
      });
    });

    cy.getByData('botao-sair').click();

    cy.url().should('include', '/');

    cy.getByData('titulo-principal')
      .should('be.visible')
      .and(
        'contain',
        'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
      );
  });
});
