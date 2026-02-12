class InventoryPage {

  validateSuccessfulLogin() {
    cy.url().should('include', 'inventory.html')
  }

  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  validateCartWithOneItem() {
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')
  }

}

export default InventoryPage
