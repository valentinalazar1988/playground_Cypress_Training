/// <reference types="Cypress" />

describe('Fixtures -Direct use', ()=>{
    it('Fixtures demo test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm.json').then((data) => {
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);

            cy.get("button[type='submit']").click();
            cy.get('.oxd-userdropdown-tab').should('be.visible');

        })
        cy.url().should('contain', '/dashboard/index');
        cy.get('.oxd-topbar-header-title').contains('Dashboard').should('be.visible');
    });
});

Cypress.Commands.add("loginAdmin", (username, password) =>{
    cy.session([username, password], () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[name='username']").type(username);
        cy.get("input[name='password']").type(password);
        cy.get("button[type='submit']").click();
        cy.get('.oxd-userdropdown-tab').should('be.visible');
    })
})