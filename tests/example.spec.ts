import { test, expect } from '@playwright/test';
import { UploadFilePage } from 'pages/uploadFile.pom';

test.only('message displays after uploading file', async ({ page }) => {
    const uploadPage = new UploadFilePage(page);
    await uploadPage.navigateTo('https://demo.guru99.com/test/upload/');
    await uploadPage.uploadFile('campfire.jpg');
    await uploadPage.assert.toDisplayUploadSuccessfully();
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
