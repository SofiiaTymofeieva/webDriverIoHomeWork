import BasePage from '../base/basePage.js'
import Button from '../elements/button.js';
import Dropdown from '../elements/dropdown.js';

class MainPage extends BasePage{
    
    get accountMenuBtn() {
        return  new Button($('#navbarAccount'), "Account Menu")
    }

    get loginBtn() {
        return new Button($('button[routerlink="/login"]'), "Login");
    }

    get logoutBtn(){
        return $('button#navbarLogoutButton')
    }


    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }

    async navigateToLogin() {
        await this.loginBtn.click();
    }

}

export default new MainPage();