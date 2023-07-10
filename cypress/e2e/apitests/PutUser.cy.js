describe('post user request', ()=>{
    let accessToken = 'f0053d82bb2c4254a468051b5cb44723fe0b9fbbec6092853e8819adc756f647'
    let randomText = ''
    let testEmail = ''
    it('post user request', ()=>{
        var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (var i = 0; i<10; i++) {
            randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
            testEmail = randomText + '@test.test'
        }
        cy.request({
            method :  'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": 'Vale L',
                "email": 'tinaval@test.test',
                "gender": 'female',
                "status": 'active'
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email', 'tinaval@test.test')
            expect(res.body).has.property('name', 'Vale L')
            expect(res.body).has.property('gender', 'female')
            expect(res.body).has.property('status', 'active')
        }).then((res) =>{
            const  userId = res.body.id
            cy.log('user ID is: ' + userId)
            cy.request({
                method :  'PUT',
                url : 'https://gorest.co.in/public/v2/users/'+userId,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": 'Lya Val',
                    "email": 'lyavale@test.test',
                    "gender": 'female',
                    "status": 'inactive'
                }
            }).then((res)=>{
                // cy.log(JSON.stringify(res));
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(userId)
                expect(res.body).has.property('email', 'lyavale@test.test')
                expect(res.body).has.property('name', 'Lya Val')
                expect(res.body).has.property('gender', 'female')
                expect(res.body).has.property('status', 'inactive')
            })
        })
    })
})