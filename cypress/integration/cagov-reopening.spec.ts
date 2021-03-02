// cagov-reopening.spec.js

describe('Reopening component test', () => {
    it('click test', () => {
      cy.visit('http://localhost:6006/iframe.html?id=covid19-cagov-reopening-variants--county-only-en');
      cy.get('button.clear').click();
      cy.get('#location-query').should('have.value', '');
    });
  })
  