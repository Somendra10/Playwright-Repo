const {test} = require("@playwright/test")
const LoginPage = require("../POM/login")
const configData= JSON.parse(JSON.stringify(require("../configFile.json")))
const testData= JSON.parse(JSON.stringify(require("../dataDrivenTest.json")))

test.describe("Multiple Login Scenario", function(){

         for(const data of testData){

             test.describe(`Login with User ${data.id}`, function(){


             test("Login into Application", async function ({page}) {

                await page.goto(configData.url)
                const login=new LoginPage(page)
                await login.username.fill(data.username)
                await login.password.fill(data.password)
                await login.submitLogin()
                
             })


             })

            }

           })