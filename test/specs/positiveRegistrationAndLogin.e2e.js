import RegistrationPage from '../../pages/registration.page.js';
import LoginPage from '../../pages/login.page.js';
import MainPage from '../../pages/main.page.js';
import randomstring from 'randomstring';

const email = `${randomstring.generate(8)}@gmail.com`;
const password = 'testPass';


describe('Registration page', () => {
    it('Registration should be completed successfully!', async () => {
        await RegistrationPage.open();
        await RegistrationPage.register(
            email,
            password,
            "Mother's maiden name?",
            "Severus"
        );

        expect(RegistrationPage.successfullyRegistrationBlock).toBeDisplayed();
    })
})

describe('Login page', () => {
    it('Login should be completed successfully!', async () => {
        await browser.setWindowSize(1024, 800);
        await LoginPage.open();
        await LoginPage.login(email, password);
        await MainPage.openAccountMenu();

        await expect(MainPage.logoutBtn).toBeDisplayed();
    })
})

