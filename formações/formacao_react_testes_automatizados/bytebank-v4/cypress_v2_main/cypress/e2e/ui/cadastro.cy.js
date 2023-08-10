import { faker } from '@faker-js/faker/locale/pt_BR';

describe('user sign up test', () => {
  const user = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  };

  it('should allow to register an user with success', () => {
    cy.viewport(1920, 1000);
    cy.visit('/');

    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(user.nome);
    cy.getByData('email-input').type(user.email);
    cy.getByData('senha-input').type(user.senha);
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');

    cy.request({
      method: 'GET',
      url: 'http://localhost:8000/users',
    }).then((response) => {
      expect(response.body).to.have.lengthOf.at.least(1);
      expect(response.body[response.body.length - 1]).to.deep.include(user);
    });
  });
});
