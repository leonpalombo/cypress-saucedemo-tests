import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'

describe('Checkout', () => {

  it('Should complete checkout successfully', () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()
    const cart = new CartPage()
    const checkout = new CheckoutPage()

    login.visitWebsite()
    login.typeUsername('standard_user')
    login.typePassword('secret_sauce')
    login.clickLogin()

    inventory.addBackpackToCart()
    inventory.openCart()

    cart.clickCheckout()

    checkout.fillPersonalData('Leonardo', 'Tester', '96000')
    checkout.clickContinue()
    checkout.clickFinish()

    checkout.validateSuccessfulCheckout()

  })

})
