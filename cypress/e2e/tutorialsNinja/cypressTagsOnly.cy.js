describe('MyTestsOnlys',()=>{

    before('before all', ()=>{
        cy.log("**** launch app ****");
    })
    beforeEach('before each', ()=>{
        cy.log("**** login ****");
    })
    it.only('listing Products', ()=>{
        cy.log("**** listing products ****");
    })
    it('test body', ()=>{
        cy.log("**** searching ****");
    })

    afterEach('after each', ()=>{
        cy.log("**** logout *****");
    })
    after('after all', ()=>{
        cy.log("**** close app *****");
    })
})