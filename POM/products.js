const {expect}= require("@playwright/test")

class ProductPage{


constructor(page){

this.page=page
this.productTitle=page.locator(".title")
this.addToCart=page.getByText("Add to cart")
this.removeFromCart=page.getByText("Remove")
this.cartBadgeCount=page.locator(".shopping_cart_badge")

}

async verifyProdPageNavigation(){
await expect(this.productTitle).toBeVisible()
}

async clickonAddToCart(){
await this.addToCart.nth(0).click()
}

async clickonRemoveFromCart(){
await this.removeFromCart.nth(0).click()
}

async verifyCartBadgeCount(){
const badgeCount= await this.cartBadgeCount.count()
expect(badgeCount).toBe(1)

}

async verifyRemoveFromCartText(){
const addCarttext= await this.addToCart.nth(0).textContent()
expect(addCarttext).toBe("Add to cart");
}


}


module.exports=ProductPage