import BasePO from './base.po';

class HomePO extends BasePO {
  private readonly pageTitle = 'LTK | Fashion, Home, Beauty, Fitness and More';
  private readonly signupBtn = '//span[contains(., "Sign up")]';

  async go(location = '/') {
    await this.navigate(location);
  }

  getPageTitle() {
    return this.pageTitle;
  }

  async getSignupBtn() {
    return await page.waitForXPath(this.signupBtn, { timeout: 30000 });
  }
}

export default new HomePO();