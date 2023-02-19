import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';

let page: Page;
let browser: Browser;
 

class CustomWorld {
    async openUrl(url) {
         browser = await chromium.launch({ headless: false });
         const context = await browser.newContext();
         page = await context.newPage();
       
        await page.goto(url);
    }
}

 setWorldConstructor(CustomWorld);
