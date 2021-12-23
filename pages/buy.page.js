import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';
import Dropdown from '../elements/dropdown.js';
import ErrorBlock from '../elements/errorBlock.js';
import Input from '../elements/input.js';

class BuyPage extends BasePage{
    
    
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
        return new Input($('input[data-placeholder="Please provide a country."]'), 'Country input');
    }

    get nameInput() {
        return new Input($('input[data-placeholder="Please provide a name."]'), 'Name input');
    }

    get mobileNumberInput() {
        return new Input($('input[data-placeholder="Please provide a mobile number."]'), 'Mobile number input');
    }

    get zipCodeInput() {
        return new Input($('input[data-placeholder="Please provide a ZIP code."]'), 'Zip code input');
    }

    get addressInput() {
        return new Input($('#address'), 'Address input');
    }

    get cityInput() {
        return new Input($('input[data-placeholder="Please provide a city."]'), 'City input');
    }

    get stateInput() {
        return new Input($('input[data-placeholder="Please provide a state."]'), 'State input');
    }

    get submitButton() {
        return new Button($('#submitButton'), "Submit button")
    }

    get addressRadiobutton(){
        return new Button($('.mat-row.cdk-row:last-child'), 'Address select')
    }

    get continueButton(){
        return new Button($('button[aria-label="Proceed to payment selection"]'), 'Continue button')
    }

    get pageLabel(){
        return new Button($('.mat-card.mat-focus-indicator.mat-elevation-z6'))
    }

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

    async setCountry(country) {
        await this.countryInput.setValue(country);
    }

    async setName(name) {
        await this.nameInput.setValue(name);
    } 

    async setMobileNumber(number) {
        await this.mobileNumberInput.setValue(number);
    } 

    async setZipCode(zip) {
        await this.zipCodeInput.setValue(zip);
    } 

    async setAddress(address) {
        await this.addressInput.setValue(address);
    } 

    async setCity(city) {
        await this.cityInput.setValue(city);
    } 

    async setState(state) {
        await this.stateInput.setValue(state);
    } 

    async clickSubmit() {
        await this.submitButton.click();
    }

    async enterAddressData(country, name, number, zip, address, city, state) {
        await this.setCountry(country);
        await this.setName(name);
        await this.setMobileNumber(number);
        await this.setZipCode(zip);
        await this.setAddress(address);
        await this.setCity(city);
        await this.setState(state);
        await this.clickSubmit();
    }

    async selectAddress() {
        await this.addressRadiobutton.click()
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }


}

export default new BuyPage();