
//const dataJson = require('../../fixtures/createuser')

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
        cy.fixture('createuser').then((payload) =>{
            cy.request({
            method :  'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": payload.name,
                "email": testEmail,
                "gender": payload.gender,
                "status": payload.status
            }
            }).then((res)=>{
               // cy.log(JSON.stringify(res));
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email', testEmail)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('gender', payload.gender)
                expect(res.body).has.property('status', payload.status)
            }).then((res) =>{
                const  userId = res.body.id
                cy.log('user ID is: ' + userId)

                cy.request({
                    method :  'GET',
                    url : 'https://gorest.co.in/public/v2/users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then((res)=>{
                   // cy.log(JSON.stringify(res));
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(userId)
                    expect(res.body.name).to.eq(payload.name)
                    expect(res.body.email).to.eq(testEmail)
                    expect(res.body.gender).to.eq(payload.gender)
                    expect(res.body.status).to.eq(payload.status)
                })
            })
        })
    })
})