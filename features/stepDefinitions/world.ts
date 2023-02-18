const { setWorldConstructor } = require('@cucumber/cucumber');
const playwright = require('playwright');

class CustomWorld {
    async openUrl(url) {
        const browser = await playwright.chromium.launch({
            headless: false,
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
    }
}

setWorldConstructor(CustomWorld);
