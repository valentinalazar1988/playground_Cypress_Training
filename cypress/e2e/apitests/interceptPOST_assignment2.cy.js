describe('Network Requests Test', () => {
    // Test 1
    it('Makes assertions on the response body', function() {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept('POST', '**/comments').as('postComment')

        cy.get('[class="network-post btn btn-success"]').contains('Post Comment').click()
        cy.wait('@postComment').then((interception) => {
            expect(interception.response.statusCode).to.eq(201)

            if (interception.response.body) {
                expect(interception.response.body).to.have.property('name')
                expect(interception.response.body).to.have.property('email')
                expect(interception.response.body).to.have.property('body')
            }
        })
    })
    // Test 2
    it('Makes assertions on the response body - stubbed response', function() {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.fixture('POSTcomment.json').as('comment')

        cy.get('@comment').then((comment) => {
            cy.intercept('POST', '**/comments', {
                statusCode: 201,
                body: comment
            }).as('postComment')

            cy.get('[class="network-post btn btn-success"]').contains('Post Comment').click()

            cy.wait('@postComment').then((interception) => {
                expect(interception.response.statusCode).to.eq(201)
                if (interception.response.body) {
                    expect(interception.response.body).to.deep.equal(comment)
                }
            })
        })
    })
})