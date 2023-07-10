/// <reference types = "Cypress" />

describe('get api user tests', ()=>{
    it('get users', ()=>{
        cy.request({
            method :  'GET',
            url : 'https://gorest.co.in/public-api/users'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)

        })
    })
    it('get users by id test', ()=>{
        cy.request({
            method :  'GET',
            url : 'https://gorest.co.in/public-api/users/3518254'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Laxman Jha')

        })
    })
})