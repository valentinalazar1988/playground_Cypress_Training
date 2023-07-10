describe('Network Requests Test', () => {

    it('validates status code for the Post Comment request', function() {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept('POST', '**/comments').as('postComment')

        cy.get('[class="network-post btn btn-success"]').contains('Post Comment').click()

        cy.wait('@postComment').its('response.statusCode').should('eq', 201)
    })

    it('validates comment visibility on the page', function() {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept('POST', '**/comments').as('postComment')

        cy.get('[class="network-post btn btn-success"]').contains('Post Comment').click()

        cy.wait('@postComment')

        cy.get('.network-post-comment')
            .should('contain.text', 'POST successful!')
    })
})