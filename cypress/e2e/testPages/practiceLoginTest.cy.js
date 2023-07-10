describe('Fixtures', () => {
    beforeEach('before each', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    })
    it('Fixtures tests', () => {

        cy.fixture ('practiceLoginDataSet.json').then((data) => {
            data.forEach((userdata) => {
                cy.get('[name="username"]').type(userdata.username);
                cy.get('[name="password"]').type(userdata.password);
                cy.get('[id="submit"]').click();

                if (userdata.expectedError == "Your username is invalid!" || userdata.expectedError == "Your password is invalid!") {
                    cy.log('Tesing Invalid credentials');
                    cy.get('[id="error"]').contains(userdata.expectedError).should('be.visible');
                }
                else {
                    cy.log('Testing valid credentials');
                    cy.url().should( 'contain', "logged-in-successfully/");
                    cy.wait(3000);
                    cy.get ('[class="post-title"]').should('be.visible').and('contain', 'Logged In Successfully');
                    cy.wait(3000);
                    cy.get('.wp-block-button__link').contains('Log out').click();
                }
            });
        });
    });
});