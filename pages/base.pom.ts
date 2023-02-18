import { Page } from '@playwright/test'
export abstract class BasePage {
  constructor(readonly page: Page) {}
  protected async navigateTo(path: string) {
    {
      await this.page.goto(path)
    }
  }
}
