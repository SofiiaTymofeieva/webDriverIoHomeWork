import  MainPage  from '../../pages/main.page.js'
import  LoginPage  from '../../pages/login.page.js'

describe('OWASP Juice Shop', () => {
    it('should contain logout option in account menu', async () => {
        MainPage.open()
        MainPage.openAccountMenu();
        MainPage.navigateToLogin();
        LoginPage.login('severus1234567@gmail.com', 'qwerty');


        await browser.pause(4000)
        MainPage.openAccountMenu();

        await expect(MainPage.logoutBtn).toBeExisting();
    });

    // it('should successfully open About us page', async () => {
    //         AboutUsPage.open();
    //         await $('a[aria-label="Button for the Twitter page of the shop"]').click();
    //     })
})

