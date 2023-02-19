import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.pom';
import { normalize, join } from 'upath';
import os from 'os';

export class UploadFilePage extends BasePage {
    readonly assert: UploadFilePageAssertions;
    readonly fileChooser: Locator;
    readonly acceptTermsCheckbox: Locator;
    readonly submitFileButton: Locator;
    readonly uploadMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.assert = new UploadFilePageAssertions(this);
        this.fileChooser = page.locator('#uploadfile_0');
        this.acceptTermsCheckbox = page.locator('#terms');
        this.submitFileButton = page.locator('#submitbutton');
        this.uploadMessage = page.locator('#res');
    }

    async factoryFilePath(fileName: string) {
        // handle path cross OS : windows 32 - 64 bits
        if (os.platform() === 'win32') {
            const filePath = normalize(__dirname.replace('pages', 'data')).concat(`\\${fileName}`);
            return filePath;
        }

        return  `./data\/${fileName}`;
    }

    async uploadFile(fileName: string) {
        const filePath = await this.factoryFilePath('campfire.jpg');
        console.log(`path: ${filePath}`);
        await this.fileChooser.click();
        await this.fileChooser.setInputFiles(filePath);
        //         await this.fileChooser.setInputFiles([filePath, 'data/web.html']);
        await this.acceptTermsCheckbox.check();
        await this.submitFileButton.click();
        await this.assert.toDisplayUploadSuccessfully();
         
    await this.page.close();
    }
}

class UploadFilePageAssertions {
    readonly uploadPage: UploadFilePage;
    constructor(readonly uploadFilePage: UploadFilePage) {
        this.uploadPage = uploadFilePage;
    }

    async toDisplayUploadSuccessfully() {
        const msg = await this.uploadPage.uploadMessage.textContent();
        expect(msg).toBe('1 file has been successfully uploaded.');
    }
}
