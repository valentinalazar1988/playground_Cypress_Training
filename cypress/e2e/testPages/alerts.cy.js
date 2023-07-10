describe('Alert Examples', () => {
// nu sunt indentate corect ca sa incapa in poza
    beforeEach('before each', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
      //  cy.get('[class="section_header"]').should('be.visible');
    })
    it('Verifies window alert box when button is clicked', () => {
        cy.on('window:alert', cy.stub().as('alertStub'));
        cy.get('[id="alertexamples"]').click();
        cy.get('@alertStub').should('have.been.calledWith', 'I am an alert box!');
    });

    it('Verifies window confirm box when button is clicked', () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a confirm alert');
            return true;
        });
        cy.get('[id="confirmexample"]').click();
    });

    it('Verifies confirmation message when window confirm box alert is cancelled', () => {
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(null)
        })
        cy.get('[id="promptexample"]').click();
        cy.contains(/You clicked Cancel. 'prompt' returned /).should('be.visible');
    });
});