describe('performing requests to API', () => {
  context('GET /users', () => {
    it('should return a list of users', () => {
      cy.request('GET', 'http://localhost:8000/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body).length.to.be.greaterThan(1);
      });
    });
  });

  context('GET /users/:userId', () => {
    it('should return a single user', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/users/40a41438-84a6-4b4d-ae1d-7f1713d0a9fe',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('nome');
      });
    });

    it('should return an error when the user is invalid', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/users/40a41438-84a6',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.eq('Not Found');
      });
    });
  });

  context('interceptating network requests', () => {
    it('should intercept the POST users/login', () => {
      cy.intercept({
        method: 'POST',
        url: 'users/login',
      }).as('loginRequest');
      cy.login('neilton@alura.com', '123456');
      cy.wait('@loginRequest').then((interception) => {
        interception.response = {
          statusCode: 200,
          body: {
            success: true,
            message: 'Login bem sucedido!',
          },
        };
      });

      cy.visit('/home');

      cy.getByData('titulo-boas-vindas').should(
        'contain.text',
        'Bem vindo de volta!'
      );
    });
  });
});
