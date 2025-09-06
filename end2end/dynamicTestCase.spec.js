import { expect,test } from "@playwright/test";
import { Testing } from "../src/pages/class";


test.describe("dynamic test cases",()=>{

    let  dynamic;

    test.beforeEach(async({page})=>{
        dynamic = new Testing(page)
    })


    test("Test Case 11: Verify Subscription in Cart page",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.subscriptionCartPage();
    })

    test("Test Case 12: Add Products in Cart",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.productsCheckCartPage();
    })


    test("Test Case 13: Verify Product quantity in Cart",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.productQuantityInLoop();
    })

    test("Test Case 14: Place Order: Register while Checkout",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.addProductAndLogin();
        await dynamic.createAccount();
        await dynamic.cardAndDeleteAcc();
    })


    test("Test Case 17: Remove Products From Cart",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.removeItemFromCart();
    })


    test("Test Case 18: View Category Products",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.viewCategoryProducts();
    })


    test("Test Case 19: View & Cart Brand Products",async({})=>{
         await dynamic.navigatePage("https://automationexercise.com/")
         await dynamic.viewBrandProducts();
    })


    test("Test Case 21: Add review on product",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.reviewOnProduct();
    })


    test("Test Case 22: Add to cart from Recommended items",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.addProductOnRecommend();
    })


    test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality",async({})=>{
        await dynamic.navigatePage("https://automationexercise.com/")
        await dynamic.scrollFunct();
    })


})