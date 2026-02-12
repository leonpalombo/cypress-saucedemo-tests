class CheckoutPage {

  fillPersonalData(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click()
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click()
  }

  validateSuccessfulCheckout() {
    cy.contains('Thank you for your order!').should('be.visible')
  }

}

export default CheckoutPage
