describe('get api user tests', ()=>{
    it('get users', ()=>{
        cy.request({
            method :  'GET',
            url : 'https://gorest.co.in/public/v1/users'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)

        })
    })
    it('get users by id', ()=>{
        cy.request({
            method :  'GET',
            url : 'https://gorest.co.in/public/v1/users/3518247'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Laxmi Tandon')
            expect(res.body.data.email).to.eq('tandon_laxmi@turner-runolfsdottir.test')
            expect(res.body.data.gender).to.eq('female')
            expect(res.body.data.status).to.eq('inactive')
        })
    })
})