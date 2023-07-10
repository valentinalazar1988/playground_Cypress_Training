describe('Verify mobile responsiveness', () => {
    // define array of devices
    const devices = ['iphone-8', 'iphone-x', 'iphone-xr'];
    devices.forEach(device => {
        it(`Verify navbar on ${device}`, () => {
            cy.viewport(device); // each from devices
            cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
            cy.contains(/Categories/).should('be.visible'); // assert that exists and visible
            cy.get('button.navbar-toggle').should('be.visible').click();// visible and click on it

            // assert visible list of categories
            cy.get('[class="navbar-collapse navbar-ex1-collapse collapse in"]').should('be.visible');
            cy.wait(3000);
            cy.get('button.navbar-toggle').click();// colaps the list of categories
        });
    });
});