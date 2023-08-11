import { faker } from '@faker-js/faker/locale/pt_BR';

describe('user info update', () => {
  const newUserData = {
    nome: faker.person.fullName(),
    senha: faker.internet.password(),
  };
  it('should allow to change user info data', () => {
    cy.visit('/');

    cy.getByData('botao-login').click();

    cy.fixture('usuarios').then((userList) => {
      cy.login(userList[0].email, userList[0].senha);
      cy.visit('/home');
      cy.url().should('include', '/home');
    });

    cy.getByData('app-home').find('a').eq(1).click();

    cy.url().should('include', '/minha-conta');

    cy.getByData('botao-salvar-alteracoes').should('be.disabled');
    cy.get('[name="nome"]').type(newUserData.nome);
    cy.get('[name="senha"]').type(newUserData.senha);
    cy.getByData('botao-salvar-alteracoes').should('not.be.disabled').click();

    cy.url().should('include', '/home');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.be.eq('Alterações salvas com sucesso!');
    });

    cy.window().then((win) => {
      expect(win.localStorage.getItem('nomeUsuario')).to.be.eq(
        newUserData.nome
      );

      const userId = win.localStorage.getItem('userId');

      cy.request('GET', `http://localhost:8000/users/${userId}`).then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body.nome).to.eq(newUserData.nome);
          expect(response.body.senha).to.eq(newUserData.senha);
        }
      );
    });
  });
});
