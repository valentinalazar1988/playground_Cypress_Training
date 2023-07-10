describe('File Upload Test', () => {
    it('successfully uploads a file', () => {
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html');

        cy.get('input[type=file]').click().selectFile('cypress/fixtures/imageFile.jpg');
        cy.get('input[type=submit]').click();

        cy.url().should('include', '/fileprocessor');
        cy.wait(3000);
        cy.contains(/You uploaded a file. This is the result./).should('be.visible');
        cy.contains('imageFile.jpg').should('be.visible');
    });
});