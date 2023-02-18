import { Before, Given, Then, When } from '@cucumber/cucumber';
import expect from 'expect';

//cucumber is not support import from ES
const {page} = require('../../hooks/commonHooks')
const { UploadFilePage } = require('../../pages/uploadFile.pom');

const p = new UploadFilePage(page);
Given('I upload a file', async function () {
  
    await p.navigateTo('');
    await p.uploadFile();
    // await uploadPage.assert.toShowUploadSuccessful();
    console.log('step I upload a file');
});

Given('I have a file to upload', () => {
  // Write code here that turns the phrase above into concrete actions
})

Given('I have a file to upload', () => {
  // Write code here that turns the phrase above into concrete actions
})
