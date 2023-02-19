import { Before, Given, Then, When } from '@cucumber/cucumber';


import { page } from '../../hooks/commonHooks';
import { UploadFilePage } from '../../pages/uploadFile.pom';
    
Given('I go to upload file page', async () => {
const uploadPage = new UploadFilePage(page);
    await uploadPage.navigateTo('https://demo.guru99.com/test/upload/');
});

When('I upload a file successfully', async () => {
    //   await uploadPage.uploadFile('campfire.jpg');
});

Then('The message should display', async () => {
    //  await uploadPage.assert.toDisplayUploadSuccessfully();
});
