const {test}= require("@playwright/test")
const LoginPage= require("../POM/login")
const ProductPage= require("../POM/products")
const configData= JSON.parse(JSON.stringify(require("../configFile.json")))

let login
let product

test.beforeEach(async function({page}) {

await page.goto(configData.url)
login= new LoginPage(page)
product= new ProductPage(page)

})

test("Verify Add to Cart Funct @smoke", async function ({page}) {

await login.enterValidEmail()
await login.enterValidPsw()
await login.submitLogin()
await product.clickonAddToCart()
await product.verifyCartBadgeCount()

})

test("Verify Remove Item From Cart Funct", async function ({page}) {

await login.enterValidEmail()
await login.enterValidPsw()
await login.submitLogin()
await product.clickonAddToCart()
await product.clickonRemoveFromCart()
await product.verifyRemoveFromCartText()
    
})

