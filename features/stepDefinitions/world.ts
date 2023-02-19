import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';
import { UploadFilePage } from '../../pages/uploadFile.pom';

let page: Page;
let browser: Browser;
let uploadPage: UploadFilePage;
setDefaultTimeout(60000);

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        uploadPage = new UploadFilePage(page);
    } catch (error) {
        throw new Error('cannot load download page');
    }
});

After(async () => {
    await browser.close();
});

export { page, browser, uploadPage };
