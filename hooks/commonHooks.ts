import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';

let page: Page;
let browser: Browser;
setDefaultTimeout(60000);

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demo.guru99.com/test/upload/');
    } catch (error) {
        throw new Error('cannot load download page');
    }
});

After(async () => {
    await browser.close();
});

export { page, browser };
