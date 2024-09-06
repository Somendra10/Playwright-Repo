const {test} = require("@playwright/test")
const LoginPage = require("../POM/login")
const ProductPage = require("../POM/products")
const configData= JSON.parse(JSON.stringify(require("../configFile.json")))

let login
let product

test.beforeEach(async function ({page}) {
await page.goto(configData.url);
login=new LoginPage(page)
product=new ProductPage(page)
    
})


test("Check with Invalid Login", async function ({page}) {
  
await login.enterInvalidEmail()
await login.enterInvalidPsw()
await login.submitLogin()
await login.verifyLoginErrorMsg()
  
  })

test("Check with valid Login", async function ({page}) {
await login.enterValidEmail()
await login.enterValidPsw()
await login.submitLogin()
await product.verifyProdPageNavigation()
     
})


