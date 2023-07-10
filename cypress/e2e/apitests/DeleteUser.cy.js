describe('post user request', ()=>{
    let accessToken = 'f0053d82bb2c4254a468051b5cb44723fe0b9fbbec6092853e8819adc756f647'
    let randomText = ''
    let testEmail = ''
    it('post user request', ()=>{
        cy.request({
            method :  'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": 'Vale L',
                "email": 'tinaval1@test.test',
                "gender": 'female',
                "status": 'active'
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email', 'tinaval1@test.test')
            expect(res.body).has.property('name', 'Vale L')
        }).then((res) =>{
            const  userId = res.body.id
            cy.log('user ID is: ' + userId)
            // DELETE user
            cy.request({
                method :  'DELETE',
                url : 'https://gorest.co.in/public/v2/users/'+userId,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            }).then((res)=>{
                expect(res.status).to.eq(204)
            })
        })
    })
})