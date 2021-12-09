import RegistrationPage from '../../pages/registration.page.js'
import randomstring from 'randomstring';


describe('Registration page', () => {
    it('Registration should be completed successfully!', async () => {
        await RegistrationPage.open();

        await RegistrationPage.enterEmail(`${randomstring.generate(8)}@gmail.com`);
        await RegistrationPage.enterPassword('testPass');
        await RegistrationPage.enterRepeatPassword('testPass');
        await RegistrationPage.selectQuestion("Mother's maiden name?");
        await RegistrationPage.enterSecurityAnswer("Severus");
        await RegistrationPage.clickRegisterButton();

        await browser.pause(7000);

        
        expect(RegistrationPage.successfullyRegistrationBlock).toBeExisting();
    })
})

