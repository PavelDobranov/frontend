import { Page } from '@playwright/test'

const credentials = {
  username: process.env.USERNAME ?? 'admin@podkrepi.bg',
  password: process.env.PASSWORD ?? '$ecurePa33',
}

export class AuthPage {
  page: Page
  constructor(page: Page) {
    this.page = page
  }

  async _submitLoginForm() {
    await this.page.click('input[type="email"]')
    await this.page.fill('input[type="email"]', credentials.username)
    await this.page.click('input[type="password"]')
    await this.page.fill('input[type="password"]', credentials.password)
    await this.page.click('text="Вход"')
    await this.page.waitForNavigation({ waitUntil: 'networkidle' })
  }

  async login() {
    await Promise.all([
      this.page.goto('http://localhost:3040/login'),
      this.page.waitForNavigation(),
    ])

    await this._submitLoginForm()
  }
}
