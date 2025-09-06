import { expect,test } from "@playwright/test";
import { homePage } from "../src/pages/login";
import { headers } from "../src/pages/homePage";

test.describe("excerise test cases", ()=>{

    let Category;
    let brand;

    test.beforeEach(async({page})=>{
        Category = new homePage(page)
        brand = new headers(page)
    })


    test("verify the categories",async({})=>{
        await Category.frontPage("https://www.automationexercise.com/");
        await Category.products();
        await Category.products2();
        
    })


    test("verify the brand polo",async({})=>{
         await Category.frontPage("https://www.automationexercise.com/");
         await Category.brands();


    })


    test("verify the brand babyhug",async({})=>{
         await Category.frontPage("https://www.automationexercise.com/");
         await Category.babyHug();
        
    })



    test("validate the Jeans word",async({})=>{
         await Category.frontPage("https://www.automationexercise.com/");
         await Category.jeanPant();

    })


    test("validate the t-shirt word",async({})=>{
          await Category.frontPage("https://www.automationexercise.com/");
          await Category.tshirt();
    })



    test("validate equal polo brand",async({})=>{
            await Category.frontPage("https://www.automationexercise.com/");
            await Category.poloEqual();
            await brand.validateEqual();        
    })


    test("download some",async({page})=>{
        await page.goto("https://letcode.in/file")
        const something = page.waitForEvent('download');
         await page.click("//a[@id='txt']")
        const download = await something;
        await download.saveAs("end2end\download files/some.txt")
    })


})

