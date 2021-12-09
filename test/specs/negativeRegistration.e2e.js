import RegistrationPage from '../../pages/registration.page.js'

describe('Registration page', () => {
    it('Should display correct error message if email not unique', async () => {
        await RegistrationPage.open();

        await RegistrationPage.enterEmail('testMail@gmail.com');
        await RegistrationPage.enterPassword('testPass');
        await RegistrationPage.enterRepeatPassword('testPass');
        await RegistrationPage.selectQuestion("Mother's maiden name?");
        await RegistrationPage.enterSecurityAnswer("Severus");
        await RegistrationPage.clickRegisterButton();

        await expect(RegistrationPage.emailErrorContainer).toBeExisting();
        await expect(RegistrationPage.emailErrorContainer).toHaveTextContaining('Email must be unique');
    })
})

