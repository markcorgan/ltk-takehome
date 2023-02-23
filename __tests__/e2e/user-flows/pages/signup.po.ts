import { ElementHandle } from 'puppeteer';
import BasePO from './base.po';

class SignUpPO extends BasePO {
  private readonly emailInput = '#input-36';
  private readonly passwordInput = '#input-47';

  async go(location = '/signup') {
    await this.navigate(location);
  }

  async getEmailInput() {
    return await page.$(this.emailInput) as any;
  }

  async getPasswordInput() {
    return await page.$(this.passwordInput) as any;
  }
}

export default new SignUpPO();