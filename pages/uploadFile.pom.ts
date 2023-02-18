import { expect, Page } from '@playwright/test';
import { BasePage } from './base.pom';

export class UploadFilePage extends BasePage {
  readonly assert: UploadFilePageAssertions;

  constructor(page: Page) {
    super(page);
    this.assert = new UploadFilePageAssertions(this);
  }

  async uploadFile() {
     console.log('calling uploadFile');
    this.assert.toShowUploadSuccessful();
  }
}

class UploadFilePageAssertions {
  constructor(readonly uploadFilePage: UploadFilePage) {}

  async toShowUploadSuccessful() {
    console.log('calling toShowUploadSuccessful');
    expect(this.uploadFilePage.page.getByLabel(''), 'msg');
  }
}
