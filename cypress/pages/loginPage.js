class LoginPage {

    visitWebsite() {
        cy.visit('/')
    }

    typeUsername(username) {
        cy.get('[data-test="username"]').type(username)
    }

    typePassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click()
    }

    validateErrorMessage() {
        cy.get('[data-test="error"]').should('be.visible')
    }


}

export default LoginPage