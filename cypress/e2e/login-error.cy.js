import LoginPage from '../pages/loginPage'

describe('Login - Invalid credentials', () => {

  it('Should display error message when password is incorrect', () => {

    const login = new LoginPage()

    login.visitWebsite()
    login.typeUsername('standard_user')
    login.typePassword('wrong_password')
    login.clickLogin()

    login.validateErrorMessage()

  })

})
