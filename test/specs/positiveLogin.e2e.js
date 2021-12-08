import RegistrationPage from '../../pages/registration.page.js'

describe('OWASP Juice Shop', () => {
    it('should contain logout option in account menu', async () => {
        await RegistrationPage.open();

        await RegistrationPage.enterEmail('testMail@gmail.com');
        await RegistrationPage.enterPassword('testPass');
        await RegistrationPage.enterRepeatPassword('testPass');
        await RegistrationPage.selectQuestion("Mother's maiden name?");
        await RegistrationPage.enterSecurityAnswer("Severus");
        await RegistrationPage.clickRegisterButton();

        await browser.pause(5000);

        })
})

