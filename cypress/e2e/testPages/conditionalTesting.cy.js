describe('Conditional Testing', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('performs checks based on the tested environment', () => {
        const envName = Cypress.env('envTag');
        if (envName === 'cypressPROD') {
            cy.get('[data-cy="header-login"]').should('contain', 'Login').and('be.visible');
            cy.get('[data-cy="header-install"]').should('contain', /Install/).and('be.visible');
        } else if (envName === 'cypressQA') {
            cy.get('a[href="https://github.com/cypress-io/cypress"]').should('be.visible');
            cy.contains('a[href="https://github.com/cypress-io/cypress"]', 'GitHub').should('be.visible');
            cy.get('a[href=href="https://docs.cypress.io/api/commands/and"]').should('be.visible');
            cy.contains('a[href=href="https://docs.cypress.io/api/commands/and"]', /API/).should('be.visible');
        }
    });
});