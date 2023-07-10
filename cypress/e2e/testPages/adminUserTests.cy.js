/// <reference types="Cypress" />

import { username, password } from '../../fixtures/orangehrm.json'
import './fixtures.cy'

beforeEach(() => {
    cy.loginAdmin(username, password);
    cy.log(username + password);
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

})

describe('Admin user account', ()=>{
    it('Logged in Admin can reach the System Users page', () => {
        cy.get('.oxd-main-menu-item').contains('Admin').should('be.visible').click();
        cy.url().should('contain', '/admin/viewSystemUsers');
        cy.get('.oxd-table-filter-header').contains('System Users').should('be.visible');
    });
    it('Logged in Admin can reach the Employee Info page ', function () {
        cy.get('.oxd-main-menu-item').contains('PIM').should('be.visible').click();
        cy.url().should('contain', '/pim/viewEmployeeList');
        cy.get('.oxd-table-filter-header').contains('Employee Information').should('be.visible');
    });
    it('Logged in Admin can reach the Leave List page ', function () {
        cy.get('.oxd-main-menu-item .oxd-main-menu-item--name0').click()  // I'm assuming clicking this navigates to the page
        cy.url().should('include', '/leave/viewLeaveList')
        cy.get('.oxd-table-filter-header').contains('Leave List').should('be.visible');
    });
});
