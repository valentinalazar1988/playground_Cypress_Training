describe('visit - login - addToChart tests', () => {
  it('Go to tutorialsninja', () => {
    cy.visit('http://tutorialsninja.com/demo/index.php?route=common/home'); // visit
    cy.contains('MacBook').click(); // find product
    cy.contains('Add to Cart').click(); // add to chart the product
    cy.contains('Shopping Cart').click(); // go to Shopping cart

    cy.get('input').contains('quantity').should(($input) => {
      const val = $input.val()
    }); // check chart quantity

    // delete products from the cart
     cy.get('[data-original-title="Remove"]').click();
     //check that the cart value is vidible and that there are no products left
     cy.get('[id="cart-total"]').should('be.visible').contains('0 item');
  });
});