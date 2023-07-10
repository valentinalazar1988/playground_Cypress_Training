describe('Contact Us', () => {
// nu sunt indentate corect ca sa incapa in poza
    beforeEach('before each', ()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[class="section_header"]').should('be.visible');
    })
    it('Sends form with invalid email address', () => {
        cy.get('[name="first_name"]').type('First Name test');
        cy.get('[name="last_name"]').type('Last Name test');
        cy.get('[name="message"]').type('This is a test message: abc');
        cy.get('[name="email"]').type('invalid@');
        cy.get('[type="submit"]').click();
        cy.wait(3000);
        cy.contains("Error: Invalid email address").should('be.visible');

    });

    it('Sends form without required fields', () => {
        cy.get('[name="email"]').type('valid@example.com');
        cy.get('[type="submit"]').click();

        cy.url().should('include', 'Contact-Us/contact_us.php');
        cy.wait(3000);
        cy.contains(/Error: all fields are required/).should('be.visible');
    });
    it('Successfully sends form with valid data', () => {
        cy.get('[name="first_name"]').type('First Name test');
        cy.get('[name="last_name"]').type('Last Name test');
        cy.get('[name="message"]').type('This is a test message: abc');
        cy.get('[name="email"]').type('valid@example.com');
        cy.get('[type="submit"]').click();

        cy.url().should('include', 'contact-form-thank-you.html');
        cy.wait(3000);
        cy.contains(/Thank You for your Message!/).should('be.visible');
    });
});