import '../../fixtures/commands.js'
import '../../fixtures/tutorialsNinjaUser.json'

describe('User Account', () => {
    beforeEach(() => {
        cy.restoreSession();
    });
    it('User should successfully login starting from homepage', () => {
        cy.userLogin();
        cy.url().should('include', 'account/account');
    });
    it('Logged in user should have access to Account Information page', () => {
        cy.userLogin();
        cy.contains('a', 'Edit Account')
            .should('be.visible')
            .click();
        cy.url().should('include', 'account/edit');
        cy.contains('h1', 'My Account Information').should('be.visible');

    });
    it('Logged in user should have access to Change your password page', () => {
        cy.userLogin();
        cy.contains('a', 'Change your password')
            .should('be.visible')
            .click();
        cy.url().should('include', 'account/password');
        cy.contains('h1', 'Change Password').should('be.visible');
    });
    it('Logged in user should have access to Modify your address book entries page', () => {
        cy.userLogin();
        cy.contains('a', 'Modify your address book entries')
            .should('be.visible')
            .click();
        cy.url().should('include', 'account/address');
        cy.contains('h2', 'Address Book Entries').should('be.visible');
    });
});
