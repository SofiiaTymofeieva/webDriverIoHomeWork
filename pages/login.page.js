import BasePage from '../base/basePage.js'

class LoginPage extends BasePage{
    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginBtn() {
        return $('button#loginButton');
    }

    get errorContainer() {
        return $('.error')
    }

    async open(){
        await super.open(`http://localhost:3000/#/login`);
        // if(await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }
}

export default new LoginPage();