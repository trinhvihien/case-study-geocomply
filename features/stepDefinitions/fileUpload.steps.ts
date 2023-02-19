import { Given, Then, When } from '@cucumber/cucumber';
import { uploadPage } from './world';

Given('I go to upload file page', async () => {
    await uploadPage.navigateTo('https://demo.guru99.com/test/upload/');
});

Given('I choose a(n executable) file {string}', async (fileName) => {
    await uploadPage.uploadFile(fileName);
});

Given('Accept terms of service', async () => {
    await uploadPage.acceptTerms();
});

When('I submit a file', async () => {
    await uploadPage.submitFile();
});

Then('The message should display', async () => {
    await uploadPage.assert.toDisplayUploadSuccessfully();
});

Given('Do not accept terms of service', async () => {
    await uploadPage.rejectTerms();
});

Given('I could not submit a(n executable) file', async () => {
    await uploadPage.assert.toDisabledSubmitFileButton();
});
