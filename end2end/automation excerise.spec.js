import  { expect,test } from '@playwright/test';
import { Testing } from '../src/pages/class';


test.describe("automation application test cases",()=>{
     
    let automate;

    test.beforeEach(async({page})=>{
        automate = new Testing(page)

    })

    test("Test Case 1: Register User",async({})=>{
        await automate.navigatePage("https://automationexercise.com/");
        await automate.userSignUp();
        await automate.userDetails();
        await automate.accountDelete();
    })


    test("Test Case 2: Login User with correct email and password",async({})=>{
         await automate.navigatePage("https://automationexercise.com/");
         await automate.correctLogin();
    })


    test("Test Case 3: Login User with incorrect email and password",async({})=>{
         await automate.navigatePage("https://automationexercise.com/");
         await automate.inCorrectLogin();
    })



    test("Test Case 4: Logout User",async({})=>{
        await automate.navigatePage("https://automationexercise.com/");
        await automate.logout();
    })



    test("Test Case 5: Register User with existing email",async({})=>{
         await automate.navigatePage("https://automationexercise.com/");
         await automate.registerExistingEmail();
    })



    test("Test Case 7: Verify Test Cases Page",async({})=>{
         await automate.navigatePage("https://automationexercise.com/");
         await automate.testCaseVisible();
    })



    test("Test Case 8: Verify All Products and product detail page",async({})=>{
        await automate.navigatePage("https://automationexercise.com/");
        await automate.productView();
    })



    test("Test Case 9: Search Product",async({})=>{
        await automate.navigatePage("https://automationexercise.com/");
        await automate.searchProductVisible();
    })



    test("Test Case 10: Verify Subscription in home page",async({})=>{
        await automate.navigatePage("https://automationexercise.com/");
        await automate.subscriptionEmail();
    })

})





