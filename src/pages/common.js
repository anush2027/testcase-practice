export class url{

    constructor(page){
    this.currentPage=page
    }


    async waitUntilUrlLoaded(url){
        await this.currentPage.waitForURL(url)

    }
}