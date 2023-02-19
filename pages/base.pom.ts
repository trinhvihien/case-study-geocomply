import { Page } from '@playwright/test';
export abstract class BasePage {
    constructor(readonly page: Page) {}
    async navigateTo(path: string) {
        {
            await this.page.goto(path);
        }
    }
}
