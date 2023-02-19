import { Before, Given, Then, When } from '@cucumber/cucumber';
import { UploadFilePage } from '../../pages/uploadFile.pom';
import { page, uploadPage } from './world';

Given('I go to upload file page', async () => {
    await uploadPage.navigateTo('https://demo.guru99.com/test/upload/');
});

When('I upload a file successfully', async () => {
    await uploadPage.uploadFile('campfire.jpg');
});

Then('The message should display', async () => {
    await uploadPage.assert.toDisplayUploadSuccessfully();
});
