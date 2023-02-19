import { test } from '@playwright/test';
import { UploadFilePage } from 'pages/uploadFile.pom';

test.only('message displays after uploading file', async ({ page }) => {
    const uploadPage = new UploadFilePage(page);
    await uploadPage.navigateTo('https://demo.guru99.com/test/upload/');
    await uploadPage.uploadFile('campfire.jpg');
    await uploadPage.acceptTerms();
    await uploadPage.submitFile();
    await uploadPage.assert.toDisplayUploadSuccessfully();
});
