import { test, expect } from '@playwright/test';
import { UploadFilePage } from 'pages/uploadFile.pom';

test.only('upload file', async ({ page }) => {

    const uploadPage = new UploadFilePage(page);
    await uploadPage.navigateTo('https://demo.guru99.com/test/upload/');
    await uploadPage.uploadFile('');

    // Expect a title "to contain" a substring.
    
});

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
});
