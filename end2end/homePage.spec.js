

import {expect,test} from "@playwright/test";
import { homePage } from "../src/pages/login";
import { headers } from "../src/pages/homePage";

 test.describe("automation test cases", ()=>{

     let login;
     let head;

test.beforeEach(async({ page })=>{
    login =new homePage(page);
    head = new headers(page);
    
});


    test("new signUp test case",async()=>{
        await login.moveToPage("https://www.automationexercise.com/login");
        await login.signUpUser("https://www.automationexercise.com/signup");
        await login.account();
        await login.details();

    })


    test("verify home page headers",async()=>{
        await login.moveToPage("https://www.automationexercise.com/login");
        await login.loginUser();
        await head.topics();
    })



    test("extract text from homePage",async()=>{
        await login.mainPage("https://www.automationexercise.com");
        await login.content();
        
    })



    test("verify brand products",async()=>{
        await login.mainPage("https://www.automationexercise.com");
        await login.brandText();
        await head.loopStructure1();
}) 



    test("validate View Products",async({})=>{
        await login.mainPage("https://www.automationexercise.com");
        await login.textFromUI();
        await head.viewProductLoop();
        })

    test("github code check",async()=>{
        await login.mainPage("https://www.automationexercise.com");
        await login.content();
        
    })


    })






















