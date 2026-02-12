import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'

describe('Cart', () => {

  it('Should add product to cart', () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()

    login.visitWebsite()
    login.typeUsername('standard_user')
    login.typePassword('secret_sauce')
    login.clickLogin()

    inventory.addBackpackToCart()
    inventory.validateCartWithOneItem()

  })

})