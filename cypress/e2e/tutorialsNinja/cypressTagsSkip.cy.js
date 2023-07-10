describe('MyTestsSkips',()=>{
    before('before all', ()=>{
        cy.log("**** launch app ****");
    })
    beforeEach('before each', ()=>{
        cy.log("**** login ****");
    })
    it('test body', ()=>{
        cy.log("**** searching ****");
    })

    afterEach('after each', ()=>{
        cy.log("**** logout *****");
    })
    it.skip('advanced search', ()=>{
        cy.log("**** advance searching ****");
    })
    after('after all', ()=>{
        cy.log("**** close app *****");
    })
})