import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'

describe('Login - Sucess', () => {

  it('Should login with valid credentials', () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()

    login.visitWebsite()
    login.typeUsername('standard_user')
    login.typePassword('secret_sauce')
    login.clickLogin()

    inventory.validateSuccessfulLogin()

  })
  
  })