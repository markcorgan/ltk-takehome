import BasePO from './base.po';

class DiscoverPO extends BasePO {
  private readonly pageTitle = 'Discover content from our community of Creators | LTK';
  private readonly forYouLink = '//a[contains(., "For You")]';

  async go(location = '/home/for-you') {
    await this.navigate(location);
  }

  getPageTitle() {
    return this.pageTitle;
  }

  async getForYouLink() {
    return await page.waitForXPath(this.forYouLink, { timeout: 30000 });
  }
}

export default new DiscoverPO();