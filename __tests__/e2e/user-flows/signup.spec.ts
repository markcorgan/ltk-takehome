import HomePO from './pages/home.po';
import SignUpPO from './pages/signup.po';
import DiscoverPO from './pages/discover.po';
import RandomUser from './helpers/utils';

describe('Sign up flows', () => {
  beforeAll(async () => {
    await HomePO.go('/');
    await HomePO.getSignupBtn();

    const title = await page.title();
    expect(title).toEqual(HomePO.getPageTitle());
  });

  it('should signup as new user', async () => {
    await SignUpPO.go('/signup');
    
    const signUpInput = await SignUpPO.getEmailInput();
    await signUpInput.type(RandomUser.generateEmail());
    await signUpInput.press('Enter');
   
    const passwordInput = await SignUpPO.getPasswordInput();
    await passwordInput.type(RandomUser.generatePassword());
    await passwordInput.press('Enter');

    await DiscoverPO.getForYouLink();

    const title = await page.title();
    expect(title).toEqual(DiscoverPO.getPageTitle());
  })
})
