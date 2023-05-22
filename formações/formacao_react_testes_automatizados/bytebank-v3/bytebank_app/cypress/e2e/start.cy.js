describe('template spec', () => {
  it('should render correctly the text in advantages section', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h2').contains('Vantagens do nosso banco:');


  })
})