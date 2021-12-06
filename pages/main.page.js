import BasePage from '../base/basePage.js'

class MainPage extends BasePage{
    get accountMenuBtn() {
        return $('#navbarAccount');
    }

    get loginBtn() {
        return $('button[routerlink="/login"]');
    }

    get logoutBtn(){
        return $('button#navbarLogoutButton')
    }

    get closePopupBtn() {
        return $('button.close-dialog');
    }

    async open(){
        await super.open(`http://localhost:3000/#/`);
        await this.closePopupBtn.click();
    }

    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }

    async navigateToLogin() {
        await this.loginBtn.click();
    }
}

export default new MainPage();