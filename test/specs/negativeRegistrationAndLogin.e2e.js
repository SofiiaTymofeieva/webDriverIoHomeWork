import LoginPage from '../../pages/login.page.js'
import RegistrationPage from '../../pages/registration.page.js'

import randomstring from 'randomstring';

const email = `${randomstring.generate(8)}@gmail.com`;
const password = 'testPass';

describe('Registration page', () => {
    it('Should display correct error message if email not unique', async () => {
        await RegistrationPage.open();
        await RegistrationPage.register(
            email,
            password,
            "Mother's maiden name?",
            "Severus"
        );

        await RegistrationPage.open();
        await RegistrationPage.register(
            email,
            password,
            "Mother's maiden name?",
            "Severus"
        );

        await expect(RegistrationPage.emailErrorContainer).toBeExisting();
        await expect(RegistrationPage.emailErrorContainer).toHaveTextContaining('Email must be unique');
    })
})

describe('Login page', () => {
    it('Should display correct error message if invalid mail or password', async () => {
        await LoginPage.open();
        await LoginPage.login(email, `${password}65`);

        await expect(LoginPage.errorContainer).toBeExisting();
        await expect(LoginPage.errorContainer).toHaveTextContaining('Invalid email or password.');
    })
})

