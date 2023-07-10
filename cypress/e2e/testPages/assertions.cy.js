describe('Assertions', () => {
    beforeEach('before each', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/attributes-test.html');
    })
    it('Should assert element attributes', () => {
        cy.get('p[original-title]')
            .should('have.attr', 'custom-attrib', 'attrib in source at load')
            .should('have.attr', 'title', 'a paragraph to test attributes on')
            .should('have.attr', 'original-title', 'This used to be the title');
        cy.get('[class="styled-click-button"]').should('not.be.disabled');
        cy.get('[id="jsattributes"]')
            .should('have.attr', 'nextid', '1');

        cy.get('[class="styled-click-button"]').click();
        cy.get('[id="jsattributes"]')
            .should('have.attr', 'custom-1', 'value-1')
            .should('have.attr', 'nextid', '2');

        cy.get('[class="styled-click-button"]').click();
        cy.get('[id="jsattributes"]')
            .should('have.attr', 'custom-2', 'value-2')
            .should('have.attr', 'custom-1', 'value-1')
            .should('have.attr', 'nextid', '3');
    });
});