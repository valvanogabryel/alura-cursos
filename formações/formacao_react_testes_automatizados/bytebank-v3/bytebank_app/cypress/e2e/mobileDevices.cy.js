describe('on mobile devices', () => {
  context('on iphone', () => {
    it('should render a hamburger menu', () => {
      cy.viewport('iphone-6');
      cy.visit('/');

      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('valvanogabryel@gmail.com');
      cy.getByData('senha-input').type('123');
      cy.getByData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByData('menu-burguer').should('be.visible');
      cy.getByData('menu-burguer').click();
      cy.getByData('menu-lateral').find('a').eq(3).click();

      cy.location('pathname').should('eq', '/home/investimentos');
    });
  });

  context('on macbook', () => {
    it('should not render a hamburguer menu', () => {
      cy.viewport('macbook-13');
      cy.visit('/');

      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('valvanogabryel@gmail.com');
      cy.getByData('senha-input').type('123');
      cy.getByData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByData('menu-burguer').should('not.be.visible');
    });
  });
});
