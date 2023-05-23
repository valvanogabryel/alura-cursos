describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should render correctly the text in "advantages" section', () => {
    // cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');

    cy.verifyText('titulo-principal', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
  });
})