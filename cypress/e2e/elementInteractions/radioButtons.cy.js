describe('Radio Buttons', () => {
// nu sunt indentate corect ca sa incapa in poza
    beforeEach('before each', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('[id="dropdowm-menu-1"]').should('be.visible');
    })
    it('Marks each radio button', () => {
        cy.get('[id="radio-buttons"]').each(($el) => {
            cy.wrap($el).should('be.visible').and('not.be.checked');
        });
        cy.get('input[type="radio"]').eq(0).check().should('be.checked').and('have.value', 'green');
        cy.get('input[type="radio"]').eq(1).check().should('be.checked').and('have.value', 'blue');
        cy.get('input[type="radio"]').eq(0).should('not.be.checked'); //green
        cy.get('input[type="radio"]').eq(2).check().should('be.checked').and('have.value', 'yellow');
        cy.get('input[type="radio"]').eq(1).should('not.be.checked');//blue
        cy.get('input[type="radio"]').eq(3).check().should('be.checked').and('have.value', 'orange');
        cy.get('input[type="radio"]').eq(2).should('not.be.checked');// yellow
        cy.get('input[type="radio"]').eq(4).check().should('be.checked').and('have.value', 'purple');
        cy.get('input[type="radio"]').eq(3).should('not.be.checked');// orange
    });

    it('Verifies state of radio buttons', () => {
        cy.get('[id="radio-buttons-selected-disabled"]').each(($el) => {
            cy.wrap($el).should('be.visible');
        }); // the list of radio buttons is visible
        cy.get('#radio-buttons-selected-disabled input[type="radio"]').eq(0)
            .should('be.visible').and('not.be.checked').and('have.value', 'lettuce');
        cy.get('#radio-buttons-selected-disabled input[type="radio"]').eq(1)
            .should('be.visible').and('be.disabled').and('have.value', 'cabbage');
        cy.get('#radio-buttons-selected-disabled input[type="radio"]').eq(2)
            .should('be.visible').and('be.checked').and('have.value', 'pumpkin');
        cy.get('#radio-buttons-selected-disabled input[type="radio"]').eq(0)
            .check().should('be.checked').and('have.value', 'lettuce');
        // Pumpkin is now unchecked
        cy.get('#radio-buttons-selected-disabled input[type="radio"]').eq(2)
            .should('not.be.checked').and('have.value', 'pumpkin');
        // Cabbage is still disabled
        cy.get('#radio-buttons-selected-disabled input[type="radio"]').eq(1)
            .should('be.disabled').and('have.value', 'cabbage');
    });
});