import { names } from "./constants/constant";
import { expect } from "@playwright/test";
import { expectedBrands } from "./constants/constant";


export class headers{

constructor(page){
    this.currentPage=page;
}

async topics(){
            for(let i=0;i<names.length;i++){
            await expect(this.currentPage.locator(`//ul[@class="nav navbar-nav"]//li[${i + 1}]`)).toContainText(names[i])
        }

}

async loopStructure1(){
        const count=await this.currentPage.locator(`//ul[@class="nav nav-pills nav-stacked"]//a`).count();
        for(let i=0;i<count;i++){
                await expect(await this.currentPage.locator(`//ul[@class="nav nav-pills nav-stacked"]//a`).nth(i)).toContainText(expectedBrands[i]);

        }
}


async viewProductLoop(){
        const count=await this.currentPage.locator(`//div[@class="features_items"]//div[@class="col-sm-4"]//div[@class="choose"]//a[1]`).count();
        for(let i=0;i<count;i++){
        await expect(await this.currentPage.locator(`//div[@class="features_items"]//div[@class="col-sm-4"]//div[@class="choose"]//a[1]`).nth(i)).toContainText('View Product');
        }

}

async validateEqual(){
            const count=await this.currentPage.locator(`//div[@class='features_items']//div[@class="col-sm-4"]`).count();
            for(let i=0;i<count;i++){
                await expect(await this.currentPage.locator(`//div[@class='features_items']//div[@class="col-sm-4"]`).nth(i)).toBeVisible()
            }
            const polo = await this.currentPage.locator(`//div[@class='features_items']//div[@class="col-sm-4"]`)
            await expect(polo).toHaveCount(6);

}


}
