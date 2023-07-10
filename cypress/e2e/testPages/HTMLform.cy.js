describe('HTML Form Example', () => {
    beforeEach('before each', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        cy.get('[id="HTMLFormElements"]').should('be.visible');
    })
    it('Fill in and successfully reach the confirmation screen', () => {
        cy.get('[name="username"]').should('be.visible');
        cy.get('[name="username"]').type('first_and_last');
        cy.get('[name="password"]').should('be.visible');
        cy.get('[name="password"]').type('parola');
        cy.get('[name="comments"]').should('be.visible');
        cy.get('[name="comments"]').type('This is a test message: abc');
        cy.get('input[type="checkbox"]').eq(2).should('be.visible').and('be.checked');
        cy.get('input[type="radio"]').eq(1)
            .should('be.visible').and('be.checked').and('have.value', 'rd2');

        cy.get('[name="multipleselect[]"]').should('be.visible'); // visible?
        cy.get('[name="multipleselect[]"]').select(['ms2', 'ms3']); // select 2 and 3
        cy.get('[name="multipleselect[]"]').should($select => { // check 2 and 3 are selected
            const val = $select.val()
            expect(val).to.include.members(['ms2', 'ms3'])
        });

        cy.get('[name="dropdown"]').select('dd4');
        cy.get('[name="dropdown"]').contains(/Drop Down Item 4/);

        cy.get('[type="submit"]').click();
        cy.url().should('include', 'the_form_processor.php');
        cy.wait(3000);

        cy.get('[id="_valueusername"]').contains('first_and_last');
        cy.get('[id="_valuepassword"]').contains('parola');
        cy.get('[id="_valuecheckboxes0"]').contains('cb3');
        cy.get('[id="_valueradioval"]').contains('rd2');
        cy.get('[id="_valuemultipleselect0"]').contains('ms2');
        cy.get('[id="_valuedropdown"]').contains('dd4');

        cy.get('#back_to_form').click();
        cy.location('pathname').should('eq', '/styled/basic-html-form-test.html');
    });

    it('Clears filled in data from the form when choosing to Cancel', () => {
        // check IS  VISIBLE
        cy.get('[name="username"]').should('be.visible');
        cy.get('[name="password"]').should('be.visible');
        cy.get('[name="comments"]').should('be.visible');
        cy.get('input[type="checkbox"]').should('be.visible');
        cy.get('input[type="radio"]').should('be.visible');
        cy.get('[name="multipleselect[]"]').should('be.visible');
        cy.get('[name="dropdown"]').should('be.visible');
        // fill in the data

        cy.get('[name="username"]').type('first_and_last');
        cy.get('[name="password"]').type('parola');
        cy.get('[name="comments"]').type('This is a test message: abc');
        cy.get('input[type="checkbox"]').eq(2).should('be.checked');
        cy.get('input[type="radio"]').eq(1)
            .should('be.checked').and('have.value', 'rd2');
        cy.get('[name="multipleselect[]"]').select(['ms2', 'ms3']); // select 2 and 3
        cy.get('[name="multipleselect[]"]').should($select => { // check 2 and 3 are selected
            const val = $select.val()
            expect(val).to.include.members(['ms2', 'ms3'])
        });
        cy.get('[name="dropdown"]').select('dd4');
        cy.get('[name="dropdown"]').contains(/Drop Down Item 4/);

        //press CANCEL
        cy.get('[type="reset"]').click();

        //check all inputs to be empty
        const inputsToCheck = ['username', 'password', 'comments'];
        cy.get('input').each(($input) => {
            if (inputsToCheck.includes($input.attr('name'))) {
                cy.wrap($input).should('have.value', '');
            }
        });
    });
});