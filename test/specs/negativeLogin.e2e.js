import  MainPage  from '../../pages/main.page.js'
import  LoginPage  from '../../pages/login.page.js'

describe('My Login application', () => {
    it('negative login test', async () => {
        MainPage.open()
        MainPage.openAccountMenu();
        MainPage.navigateToLogin();
        LoginPage.login('severus1@gmail.com', '567567568565');

        await expect(LoginPage.errorContainer).toBeExisting();
        await expect(LoginPage.errorContainer).toHaveTextContaining('Invalid email or password.');
    });
});

