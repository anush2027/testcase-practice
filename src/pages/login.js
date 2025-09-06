import { expect,test } from "@playwright/test";
import { url } from "./common";
import xpath from '../locators/locator.json'
import datas from '../commandDatas/testCaseData.json'

export class homePage extends url{


constructor(page){
        super(page)
this.currentPage = page;
}


async moveToPage(url){
            await this.currentPage.goto(url)

}

async signUpUser (url){
        await this.currentPage.locator(xpath.nameTextBox).fill(datas.name)
        await this.currentPage.locator(xpath.emailTextBox).fill(datas.email)
        await this.currentPage.locator(xpath.clickSignUp).click()
        await this.waitUntilUrlLoaded(url)
       
}

async account(){
        await expect(this.currentPage.locator(xpath.viewText)).toBeVisible()
        await expect(this.currentPage.locator(xpath.containText)).toContainText(datas.text)

}

async details(){
            await this.currentPage.locator(xpath.genderCheck).click()
            await this.currentPage.locator(xpath.passwordForAcc).fill(datas.passwordForAcc)
            await this.currentPage.locator(xpath.date).selectOption(datas.dateOfBirth)
            await this.currentPage.locator(xpath.month).selectOption(datas.dateOfMonth)
            await this.currentPage.locator(xpath.year).selectOption(datas.dateOfYear)
            await this.currentPage.locator(xpath.firstName).fill(datas.firstName)
            await this.currentPage.locator(xpath.lastName).fill(datas.secondName)
            await this.currentPage.locator(xpath.address1).fill(datas.address1)
            await this.currentPage.locator(xpath.state).fill(datas.state)
            await this.currentPage.locator(xpath.city).fill(datas.city)
            await this.currentPage.locator(xpath.zipcoce).fill(datas.pincode)
            await this.currentPage.locator(xpath.mobileNumber).fill(datas.phoneNumber)
            await this.currentPage.locator(xpath.clickCreateAcc).click()
    
}

async loginUser(){
        await this.currentPage.locator(xpath.email).fill(datas.loginCrtEmail)
        await this.currentPage.locator(xpath.password).fill(datas.loginCrtPassword)
        await this.currentPage.locator(xpath.login).click()
}

async content(){
        await expect(this.currentPage.locator(xpath.automationText)).toContainText(datas.automationText)
        await expect(this.currentPage.locator(xpath.fullFedgeText)).toBeVisible()
        await expect(this.currentPage.locator(xpath.allQaText)).toBeVisible()
}

async mainPage(url){
                await this.currentPage.goto(url);

}

async brandText(){
                await expect(this.currentPage.locator(xpath.brands)).toHaveText(datas.brands)

}

async textFromUI(){
        await expect(this.currentPage.locator(xpath.featureText)).toContainText(datas.uiText)

}

async frontPage(url){
       await this.currentPage.goto(url)
}

async products(){
         await expect(this.currentPage.locator(xpath.categoryVisible)).toContainText(datas.categories)
        await this.currentPage.locator(xpath.womenClick).click()
        await expect(this.currentPage.locator(xpath.dress)).toContainText(datas.dress)
        await expect(this.currentPage.locator(xpath.top)).toContainText(datas.tops)
        await expect(this.currentPage.locator(xpath.saree)).toContainText(datas.saree)
        await this.currentPage.locator(xpath.men).click()
}

async products2(){
         await expect(this.currentPage.locator(xpath.tshirt)).toContainText(datas.tshirt)
         await expect(this.currentPage.locator(xpath.jeans)).toContainText(datas.jeans)
         await this.currentPage.locator(xpath.plus).click()
         await expect(this.currentPage.locator(xpath.kidsDress)).toContainText(datas.kidsDress)
         await expect(this.currentPage.locator(xpath.topAndShirt)).toContainText(datas.topAndShirt)
        
}

async brands(){
                await expect(this.currentPage.locator(xpath.brandPolo)).toBeVisible()
                await this.currentPage.locator(xpath.brandPolo).click()
                await expect(this.currentPage.locator(xpath.brandUi)).toContainText(datas.brandUi)
                await this.currentPage.locator(xpath.product1).click()
                await expect(this.currentPage.locator(xpath.nameOfBrand)).toContainText(datas.nameOfBrand)
                test.setTimeout(60000);
                await this.currentPage.goBack();
                await this.currentPage.locator(xpath.product2).click()
                await expect(this.currentPage.locator(xpath.nameOfBrand)).toContainText(datas.nameOfBrand)
                test.setTimeout(80000);
                await this.currentPage.goBack();
                await this.currentPage.locator(xpath.product3).click()
                await expect(this.currentPage.locator(xpath.nameOfBrand)).toContainText(datas.nameOfBrand)
                test.setTimeout(60000);
                await this.currentPage.goBack();
                await this.currentPage.locator(xpath.product4).click()
                await expect(this.currentPage.locator(xpath.nameOfBrand)).toContainText(datas.nameOfBrand)
                test.setTimeout(60000);
                await this.currentPage.goBack();
                await this.currentPage.locator(xpath.product5).click()
                await expect(this.currentPage.locator(xpath.nameOfBrand)).toContainText(datas.nameOfBrand)
                test.setTimeout(60000);
                await this.currentPage.goBack();
                await this.currentPage.locator(xpath.product6).click()
                await expect(this.currentPage.locator(xpath.nameOfBrand)).toContainText(datas.nameOfBrand)        
}

async babyHug(){
        await expect(this.currentPage.locator(xpath.babyhug)).toBeVisible()
        await this.currentPage.locator(xpath.babyhug).click()
        await this.currentPage.locator(xpath.babyhug1).click()
        await expect(this.currentPage.locator(xpath.brandbabyhug)).toContainText(datas.brandbabyhug)
        test.setTimeout(60000);
        await this.currentPage.goBack();
        await this.currentPage.locator(xpath.babyhug2).click()
        await expect(this.currentPage.locator(xpath.brandbabyhug)).toContainText(datas.brandbabyhug)
        test.setTimeout(60000);
        await this.currentPage.goBack();
        await this.currentPage.locator(xpath.babyhug3).click()
        await expect(this.currentPage.locator(xpath.brandbabyhug)).toContainText(datas.brandbabyhug)
        await this.currentPage.goBack();
        await this.currentPage.locator(xpath.babyhug4).click()
        await expect(this.currentPage.locator(xpath.brandbabyhug)).toContainText(datas.brandbabyhug)
}

async jeanPant(){
         await expect(this.currentPage.locator(xpath.title)).toContainText(datas.men)
         await this.currentPage.locator(xpath.men).click()
        await this.currentPage.locator(xpath.jeans).click()
        await expect(this.currentPage.locator(xpath.jean1)).toBeEnabled(datas.jeans)
        await expect(this.currentPage.locator(xpath.jean2)).toBeEnabled(datas.jeans)
        await expect(this.currentPage.locator(xpath.jean3)).toBeEnabled(datas.jeans)
}

async tshirt(){
          await this.currentPage.locator(xpath.menClick).click()
          await this.currentPage.locator(xpath.tshirtClick).click()
          await expect(this.currentPage.locator(xpath.menTshirt)).toBeVisible(datas.menTshirt)
          await expect(this.currentPage.locator(xpath.tshirt1)).toBeEnabled(datas.tshirt1)
          await expect(this.currentPage.locator(xpath.tshirt2)).toBeEnabled(datas.tshirt2)
          await expect(this.currentPage.locator(xpath.tshirt3)).toBeEnabled(datas.tshirt3)
          await expect(this.currentPage.locator(xpath.tshirt4)).toBeEnabled(datas.tshirt1)
          await expect(this.currentPage.locator(xpath.tshirt5)).toBeEnabled(datas.tshirt4)
}

async poloEqual(){
            await expect(this.currentPage.locator(xpath.brandPolo)).toBeVisible() 
            await this.currentPage.locator(xpath.brandPolo).click()

}


}