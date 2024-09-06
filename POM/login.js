const {expect}=require("@playwright/test")
const configData= JSON.parse(JSON.stringify(require("../configFile.json")))

class LoginPage {


    constructor(page) {

    this.page = page
    this.username = page.locator("//input[@id='user-name']")
    this.password = page.locator("//input[@id='password']")
    this.loginBtn = page.locator("//input[@id='login-button']")
    this.loginErrorMsg = page.locator("//h3[@data-test='error']")
    this.jsBtn= page.locator(".btn-info")
    this.alertOption= page.getByRole('link', {name:'Alert with Textbox'})
    
    }

    async enterInvalidEmail() {
    await this.username.fill(configData.invalidUsername)
    }

    async enterInvalidPsw() {
    await this.password.fill(configData.invalidPassword)
    }

    async enterValidEmail() {
    await this.username.fill(configData.validUsername)
    }

    async enterValidPsw() {
    await this.password.fill(configData.validPassword)
    }

    async submitLogin() {
    await this.loginBtn.click()
    }

    async verifyLoginErrorMsg(){
        
    await expect(this.loginErrorMsg).toHaveText(/Epic sadface/);
    }
   

}

module.exports=LoginPage
