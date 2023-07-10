
import '../../fixtures/commands.js'
describe('Checkboxes', () => {

    beforeEach('before each', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('[id="dropdowm-menu-1"]').should('be.visible');
    })

    it('Checks/Unchecks 1 checkbox', () => {
        cy.getInputByValue('option-1')
            .should('be.visible')
            .check()
            .and('be.checked')
            .uncheck()
            .and('not.be.checked');
    });

    it('Checks/UnchecksOption 2 checkbox', () => {
        cy.get('input[type="checkbox"]').first().should('be.visible').check().and('be.checked').uncheck().and('not.be.checked');
    });
    it('Checks/Unchecks Option 3 checkbox', () => {
        cy.get('input[type="checkbox"]').eq(2).should('be.visible').check().and('be.checked').uncheck().and('not.be.checked');
    });
    it('Checks/Unchecks Option 4 checkbox', () => {
        cy.get('input[type="checkbox"]').should('be.visible').check().and('be.checked').uncheck().and('not.be.checked');
    });
});