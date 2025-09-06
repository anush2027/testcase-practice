import { expect,test } from "@playwright/test";
import locator from '../locators/locator.json';
import datas from '../commandDatas/testCaseData.json'


export class Testing{

    constructor(page){
    this.currentPage=(page)
    }


async navigatePage(url){
     await this.currentPage.goto(url)
}

async userSignUp(){
        await expect(this.currentPage.locator(locator.homeVisible)).toBeVisible()
        await this.currentPage.locator(locator.clickPage).click()
        await expect(this.currentPage.locator(locator.newUserVisible)).toBeVisible()
        await this.currentPage.locator(locator.nameTextBox).fill(datas.signUpName)
        await this.currentPage.locator(locator.emailTextBox).fill(datas.signUpEmail)
        await this.currentPage.locator(locator.clickSignUp).click()
}

async userDetails(){
         await expect(this.currentPage.locator(locator.AccInforVisible)).toBeVisible()
        await this.currentPage.locator(locator.genderCheck).check()
        await this.currentPage.locator(locator.passwordForAcc).fill(datas.passwordForAcc)
        await this.currentPage.locator(locator.date).selectOption(datas.dateOfBirth)
        await this.currentPage.locator(locator.month).selectOption(datas.dateOfMonth)
        await this.currentPage.locator(locator.year).selectOption(datas.dateOfYear)
        await this.currentPage.locator(locator.newsLetterClick).check()
        await this.currentPage.locator(locator.optionClick).check()
        await this.currentPage.locator(locator.firstName).fill(datas.firstName)
        await this.currentPage.locator(locator.lastName).fill(datas.secondName)
        await this.currentPage.locator(locator.companyName).fill(datas.companyName)
        await this.currentPage.locator(locator.address1).fill(datas.address1)
        await this.currentPage.locator(locator.address2).fill(datas.address2)
        await this.currentPage.locator(locator.country).selectOption(datas.country)
        await this.currentPage.locator(locator.state).fill(datas.state)
        await this.currentPage.locator(locator.city).fill(datas.city)
        await this.currentPage.locator(locator.zipcoce).fill(datas.pincode)
        await this.currentPage.locator(locator.mobileNumber).fill(datas.phoneNumber)
        await this.currentPage.locator(locator.clickCreateAcc).click()
        await expect(this.currentPage.locator(locator.accCreatedVisible)).toBeVisible()
        await this.currentPage.locator(locator.clickContinueBtn).click()
}

async  accountDelete(){
        await expect(this.currentPage.locator(locator.accNameVisible)).toBeVisible()
        await this.currentPage.locator(locator.clickDeleteAcc).click()
        await expect(this.currentPage.locator(locator.accDeleteVisible)).toBeVisible()
        await this.currentPage.locator(locator.continueBtn).click()
}

async correctLogin(){
         await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.locator(locator.signUpBtn).click()
        await expect(this.currentPage.locator(locator.loginToUserTextVisible)).toBeVisible()
        await this.currentPage.locator(locator.loginEmail).fill(datas.crtEmail)
        await this.currentPage.locator(locator.loginPassword).fill(datas.crtPassword)
        await this.currentPage.click(locator.loginBtn)
        await expect(this.currentPage.locator(locator.homeText)).toBeVisible()
        await this.currentPage.locator(locator.deleteAccBtn).click()
        await expect(this.currentPage.locator(locator.accountDeleteVisible)).toBeVisible()
}

async inCorrectLogin(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.locator(locator.signUpBtn).click()
        await expect(this.currentPage.locator(locator.loginToUserTextVisible)).toBeVisible()
        await this.currentPage.locator(locator.loginEmail).fill(datas.loginIncorrectEmail)
        await this.currentPage.locator(locator.loginPassword).fill(datas.loginIncorrectPassword)
        await this.currentPage.locator(locator.loginBtn).click()
        await expect(this.currentPage.locator(locator.textOfEmailIncorrect)).toBeVisible()
}

async logout(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.locator(locator.signUpBtn).click()
        await expect(this.currentPage.locator(locator.loginToUserTextVisible)).toBeVisible()
        await this.currentPage.locator(locator.loginEmail).fill(datas.forLogoutEmail)
        await this.currentPage.locator(locator.loginPassword).fill(datas.forLogoutPassword)
        await this.currentPage.locator(locator.loginBtn).click()
        await expect(this.currentPage.locator(locator.homeText)).toBeVisible()
        await this.currentPage.locator(locator.logoutBtn).click()
        await expect(this.currentPage.locator(locator.signUpBtn)).toBeVisible()
}

async registerExistingEmail(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.locator(locator.signUpBtn).click()
        await expect(this.currentPage.locator(locator.newUserVisible)).toBeVisible()
        await this.currentPage.locator(locator.nameTextBox).fill(datas.inCrtName)
        await this.currentPage.locator(locator.emailTextBox).fill(datas.inCrtEmail)
        await this.currentPage.locator(locator.clickSignUp).click()
        await expect(this.currentPage.locator(locator.emailAlreadyExist)).toBeVisible()

}

async testCaseVisible(){
         await expect(this.currentPage.locator(locator.homeVisible)).toBeVisible()
         await this.currentPage.click(locator.testCaseClickBtn)
         await expect(this.currentPage.locator(locator.testCasePageVisible)).toBeVisible()
}

async productView(){
        await expect(this.currentPage.locator(locator.homeVisible)).toBeVisible()
        await this.currentPage.click(locator.productPage)
        await expect(this.currentPage.locator(locator.feauturesItemVisible)).toBeVisible()
        await this.currentPage.click(locator.itemOne)
        await expect(this.currentPage.locator(locator.firstProductDetails)).toBeVisible()
}

async searchProductVisible(){
        await expect(this.currentPage.locator(locator.homeVisible)).toBeVisible()
        await this.currentPage.click(locator.productPage)
        await expect(this.currentPage.locator(locator.feauturesItemVisible)).toBeVisible()
        await this.currentPage.locator(locator.searchTextBox).fill(datas.searchedproductName)
        await this.currentPage.click(locator.searchButton)
        await expect(this.currentPage.locator(locator.searchProductVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.searchedproductdetail)).toBeVisible()
}

async subscriptionEmail(){
        await expect(this.currentPage.locator(locator.homeVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.subscriptionText)).toContainText(datas.subscriptionemail)
        await this.currentPage.locator(locator.forSubscriptionEmail).fill(datas.loginCrtEmail)
        await this.currentPage.click(locator.subscriptionArrow)
        await expect(this.currentPage.locator(locator.successMessage)).toBeVisible()
}

async subscriptionCartPage(){
        await expect(this.currentPage.locator(locator.homeVisible)).toBeVisible()
        await this.currentPage.click(locator.cartPage)
        await expect(this.currentPage.locator(locator.subscriptionText)).toContainText(datas.subscriptionemail)
        await this.currentPage.locator(locator.forSubscriptionEmail).fill(datas.loginCrtEmail)
        await this.currentPage.click(locator.subscriptionArrow)
        await expect(this.currentPage.locator(locator.successMessage)).toBeVisible()
}

async productsCheckCartPage(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.click(locator.productClick)
        await this.currentPage.click(locator.firstProductClick)
        await this.currentPage.click(locator.continueShopping)
        await this.currentPage.click(locator.secondProductClick)
        await this.currentPage.click(locator.viewCart)
        await expect(this.currentPage.locator(locator.productOneVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.productTwoVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.productPrice)).toHaveText(datas.amountOfFirstItem)
        await expect(this.currentPage.locator(locator.quantityVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.totalPrice)).toBeVisible()
        await expect(this.currentPage.locator(locator.itemPrice)).toHaveText(datas.amtOfSecondItem)
        await expect(this.currentPage.locator(locator.visibleOfQuantity)).toBeVisible()
        await expect(this.currentPage.locator(locator.totalAmountPrice)).toBeVisible()
}

async productQuantityInLoop(){
         await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        for (let i = 0; i < 4; i++) {
        await this.currentPage.click(locator.firstProductClick);
        await this.currentPage.click(locator.continueShopping);
  }
         await this.currentPage.click(locator.cartClick);
        await expect(this.currentPage.locator(locator.productOneVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.exactCount)).toHaveText(datas.multiCount)
}


async addProductAndLogin(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.click(locator.firstProductClick);
        await this.currentPage.click(locator.continueShopping);
        await this.currentPage.click(locator.secondProductClick)
        await this.currentPage.click(locator.continueShopping);
        await this.currentPage.click(locator.cartClick);
        await expect(this.currentPage.locator(locator.cartItemsVisible)).toBeVisible()
        await this.currentPage.click(locator.proceedToCheck)
        await this.currentPage.click(locator.registerLogin)
}

async createAccount(){
        await this.currentPage.locator(locator.nameTextBox).fill(datas.signUpName)
        await this.currentPage.locator(locator.emailTextBox).fill(datas.signUpEmail)
        await this.currentPage.click(locator.clickSignUp)
        await this.currentPage.click(locator.genderCheck)
        await this.currentPage.locator(locator.passwordForAcc).fill(datas.passwordForAcc)
        await this.currentPage.locator(locator.date).selectOption(datas.dateOfBirth)
        await this.currentPage.locator(locator.month).selectOption(datas.dateOfMonth)
        await this.currentPage.locator(locator.year).selectOption(datas.dateOfYear)
        await this.currentPage.locator(locator.firstName).fill(datas.firstName)
        await this.currentPage.locator(locator.lastName).fill(datas.secondName)
        await this.currentPage.locator(locator.address1).fill(datas.address1)
        await this.currentPage.locator(locator.country).selectOption(datas.country)
        await this.currentPage.locator(locator.state).fill(datas.state)
        await this.currentPage.locator(locator.city).fill(datas.city)
        await this.currentPage.locator(locator.zipcoce).fill(datas.pincode)
        await this.currentPage.locator(locator.mobileNumber).fill(datas.phoneNumber)
        await this.currentPage.click(locator.clickCreateAcc)
        await expect(this.currentPage.locator(locator.accCreatedVisible)).toBeVisible()
        await this.currentPage.click(locator.clickContinueBtn)
        await expect(this.currentPage.locator(locator.accNameVisible)).toBeVisible()
}

async cardAndDeleteAcc(){
        await this.currentPage.click(locator.cartClick)
        await this.currentPage.click(locator.proceedToCheck)
        await expect(this.currentPage.locator(locator.addressDetailVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.reviewOrdVisible)).toBeVisible()
        await this.currentPage.click(locator.clickPlaceOrd)
        await this.currentPage.locator(locator.cardName).fill(datas.signUpName)
        await this.currentPage.locator(locator.cardNumber).fill(datas.cardNum)
        await this.currentPage.locator(locator.expDate).fill(datas.expDate)
        await this.currentPage.locator(locator.expMonth).fill(datas.expMonth)
        await this.currentPage.locator(locator.expYear).fill(datas.expYear)
        await this.currentPage.click(locator.submitBtn)
        await expect(this.currentPage.locator(locator.congratsText)).toBeVisible()
        await this.currentPage.click(locator.continueBtn)
        await this.currentPage.click(locator.deleteAccBtn)
        await expect(this.currentPage.locator(locator.accDeleteVisible)).toBeVisible()
        await this.currentPage.click(locator.continueBtn)
}

async removeItemFromCart(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.click(locator.firstProductClick)
        await this.currentPage.click(locator.continueShopping);
        await this.currentPage.click(locator.secondProductClick)
        await this.currentPage.click(locator.continueShopping)
        await this.currentPage.click(locator.cartClick);
        await expect(this.currentPage.locator(locator.cartClick)).toBeVisible()
        await this.currentPage.click(locator.removeItems)
        await expect(this.currentPage.locator(locator.removedItemVisible)).toBeVisible()
}

async viewCategoryProducts(){
        await expect(this.currentPage.locator(locator.categoryVisible)).toBeVisible()
        await this.currentPage.click(locator.womenClick)
        await this.currentPage.locator(locator.dressClick).click()
        await expect(this.currentPage.locator(locator.featureItemsVisible)).toBeVisible()
        await this.currentPage.click(locator.menClick)
        await this.currentPage.click(locator.tshirtClick)
        await expect(this.currentPage.locator(locator.featureItemsVisible)).toBeVisible()
}

async viewBrandProducts(){
         await this.currentPage.click(locator.productPage)
         await expect(this.currentPage.locator(locator.brandProduct)).toBeVisible()
         await this.currentPage.click(locator.brandProdClick)
         await expect(this.currentPage.locator(locator.featureItemsVisible)).toBeVisible()
         await this.currentPage.click(locator.brandBibaClick)
         await expect(this.currentPage.locator(locator.featureItemsVisible)).toBeVisible()
}

async reviewOnProduct(){
        await this.currentPage.click(locator.productPage)
        await expect(this.currentPage.locator(locator.featureItemsVisible)).toBeVisible()
        await this.currentPage.click(locator.clickViewProduct)
        await expect(this.currentPage.locator(locator.reviewVisible)).toBeVisible()
        await this.currentPage.locator(locator.reviewName).fill(datas.signUpName)
        await this.currentPage.locator(locator.reviewEmail).fill(datas.signUpEmail)
        await this.currentPage.locator(locator.reviewText).fill(datas.reviewMessage)
        await this.currentPage.click(locator.reviewBtn)
        await expect(this.currentPage.locator(locator.reviewsuccess)).toBeVisible()
}

async addProductOnRecommend(){
        await expect(this.currentPage.locator(locator.recommendItems)).toBeVisible()
        await this.currentPage.click(locator.recommendProductClick)
        await this.currentPage.click(locator.viewCart)
        await expect(this.currentPage.locator(locator.productVisible)).toBeVisible()
}

async scrollFunct(){
        await expect(this.currentPage.locator(locator.homePageVisible)).toBeVisible()
        await this.currentPage.locator(locator.subscriptionText).scrollIntoViewIfNeeded()
        await expect(this.currentPage.locator(locator.subscriptionText)).toBeVisible()
        await this.currentPage.click("#scrollUp")
        await expect(this.currentPage.locator(locator.fullFedgeTextVisible)).toBeVisible()

}
}