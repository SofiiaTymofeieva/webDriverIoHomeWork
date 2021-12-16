import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';
import Dropdown from '../elements/dropdown.js';
import ErrorBlock from '../elements/errorBlock.js';
import Input from '../elements/input.js';

class search extends BasePage{
    
    
    get closePopupBtn() {
        return new Button($('button.close-dialog'), "Close popup");
    }

    get addToBasket() {
        return new Button($('button.mat-focus-indicator.btn-basket.mat-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted'));
    }

    get yourBasketBtn() {
         return new Button($('button[routerlink="/basket"]'), "Basket");
        
    }

    get checkoutBtn() {
        return new Button($('#checkoutButton'), "Checkout");  
    }

   
    get addNewAddress() {
        return new Button($('button[routerlink="/address/create"]'), "Add new address");  
    }

     get countryInput() { 
        return new Input($('#mat-input-9'), "Country input");
    }
    //  get nameInput() {
    //     return new Input($('#mat-input-7'), "Name input");
    // }
    //  get mobileInput() {
    //     return new Input($('#mat-input-10'), "Mobile number input");
    // }

    // get zipInput() {
    //     return new Input($('#mat-input-11'), "Zip input");
    // }

    // get addressInput() {
    //     return new Input($('#address'), "Address input");
    // }

    // get cityInput() {
    //     return new Input($('#mat-input-13'), "City input");
    // }

    // get stateInput() {
    //     return new Input($('#mat-input-14'), "State input");
    // }



 
    // get passwordInput() {
    //     return new Input($('#passwordControl'), "Password input");
    // }

    // get questionDropdown() {
    //     return new Dropdown($('[name="securityQuestion"]'), "Security question");
    // }

    // get repeatPasswordInput() {
    //     return new Input($('#repeatPasswordControl'), "Repeat password input");
    // }

    // get securityAnswer() {
    //     return new Input($('#securityAnswerControl', "Security answer"));
    // }

    // get registerButton() {
    //     return new Button($('#registerButton'), "Register button");
    // }

    // get emailErrorContainer() {
    //     return $('.error');
    // }
    
    // get successfullyRegistrationBlock() {
    //     return $('.mat-simple-snackbar');
    // }

    async open(){
        allure.addStep("Search and buying items");
        await super.open(`http://localhost:3000/#/search`);
        if(await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
    }

    async clickAddToBasket() {
        await this.addToBasket.click()
    }

    async clickYourBasketBtn() {
        await this.yourBasketBtn.click()
    }

    async clickCheckoutBtn() {
        await this.checkoutBtn.click()
    }

    async clickAddNewAddress() {
        await this.addNewAddress.click()
    }

    async addCountryInput(value) {
        await this.countryInput.setValue(value);
        
    }

    // async CountryInput() {
    //     await this.countryInput.setValue()
    //     await this.countryInput.click()
    // }




    // async selectQuestion(text) {
    //     await this.questionDropdown.select(text);
    // }

    // async enterEmail(email){
    //     await this.emailInput.setValue(email)
    // }

    // async enterPassword(pass){
    //     await this.passwordInput.setValue(pass)
    // }

    // async enterRepeatPassword(pass){
    //     await this.repeatPasswordInput.setValue(pass)
    // }

    // async enterSecurityAnswer(answer){
    //     await this.securityAnswer.setValue(answer)
    // }

    // async clickRegisterButton(){
    //     await this.registerButton.click()
    // }
}

export default new search();