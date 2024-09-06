const {test, expect}= require('@playwright/test')

function getrandomInt(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

test("Invalid Login Test with random value", async function ({page}) {
    const randomInt= getrandomInt(1, 1000)
    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("test"+randomInt+"@test.com")
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.locator(".submit-button").click()
   const Actual= await page.locator("//h3[@data-test='error']").textContent()
   expect(Actual).toContain("Epic sadface")
   
})

test("Scroll Test", async function({page}){

    await page.goto("https://scrolltest.com/")
    const Element= page.locator("//h2[text()='What People Say About Me']")
    await Element.scrollIntoViewIfNeeded()
  
})

test("Mouse Hover Test", async function({page}) {

    await page.goto("https://www.globalsqa.com/")
   await page.getByRole('link', { name: 'Free Ebooks' }).hover()
   await page.getByRole('link', { name: 'Free Machine Learning Ebooks'}).click()
    
})

test("Upload Screenshot Test", async function({page}) {

    await page.goto("https://practice.expandtesting.com/upload")
    await page.locator("#fileInput").setInputFiles("./Upload_Image/Screenshot_1.png")
    await page.waitForTimeout(5000)
    
})

test("Handle Java Script Alert pop-up", async function ({page}) {

    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on('dialog', async function (dialogWindow) {

       
        expect(dialogWindow.message()).toContain("I am an alert box!")
        await dialogWindow.accept()
        
    })
       await page.locator(".btn-danger").click()
    })

    test("Handle Java Script Confirm pop-up", async function ({page}) {

        await page.goto("https://demo.automationtesting.in/Alerts.html")
    
        page.on('dialog', async function (dialogWindow) {
    
           
            expect(dialogWindow.message()).toContain("Press a Button !")
            await dialogWindow.dismiss()
            
        })
           await page.getByRole('link', {name:'Alert with OK & Cancel'}).click()
           await page.locator(".btn-primary").click()
        })

        test("Handle Java Script Prompt pop-up", async function ({page}) {

            await page.goto("https://demo.automationtesting.in/Alerts.html")
        
            page.on('dialog', async function (dialogWindow) {
        
               
            expect(dialogWindow.message()).toContain("Please enter your name")
            await dialogWindow.accept("Prompt pop-up")
                
            })
            await page.getByRole('link', {name:'Alert with Textbox'}).click()
            await page.locator(".btn-info").click()
            })

        test.skip("iFrame Test", async function ({page}) {
            await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
            await page.locator("//select").selectOption({label:"India"})
          //const iFrame= page.frameLocator("//iframe[@id='singleframe']")
          //  await iFrame.locator("//input").fill("Test iFrame Logic")
        })

        test("valid Login", async function ({page}) {
            await page.goto("https://www.saucedemo.com/")
            await expect(page).toHaveURL("https://www.saucedemo.com/");
            await page.locator("#user-name").fill("standard_user")
            await page.locator("//input[@id='password']").fill("secret_sauce")
            await page.locator(".submit-button").click()
            expect(page.getByText("Add to cart").nth(1)).toBeVisible()

           
        })


