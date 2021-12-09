import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';
import Dropdown from '../elements/dropdown.js';
import ErrorBlock from '../elements/errorBlock.js';
import Input from '../elements/input.js';

class RegistrationPage extends BasePage{
    get closePopupBtn() {
        return new Button($('button.close-dialog'), "Close popup");
    }

    get emailInput() {
        return new Input($('#emailControl'), "Email input");
    }
 
    get passwordInput() {
        return new Input($('#passwordControl'), "Password input");
    }

    get questionDropdown() {
        return new Dropdown($('[name="securityQuestion"]'), "Security question");
    }

    get repeatPasswordInput() {
        return new Input($('#repeatPasswordControl'), "Repeat password input");
    }

    get securityAnswer() {
        return new Input($('#securityAnswerControl', "Security answer"));
    }

    get registerButton() {
        return new Button($('#registerButton'), "Register button");
    }

    get emailErrorContainer() {
        return $('.error');
    }
    
    get successfullyRegistrationBlock() {
        return $('.mat-simple-snackbar');
    }

    async open(){
        await super.open(`http://localhost:3000/#/register`);
        if(await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
    }

    async selectQuestion(text) {
        await this.questionDropdown.select(text);
    }

    async enterEmail(email){
        await this.emailInput.setValue(email)
    }

    async enterPassword(pass){
        await this.passwordInput.setValue(pass)
    }

    async enterRepeatPassword(pass){
        await this.repeatPasswordInput.setValue(pass)
    }

    async enterSecurityAnswer(answer){
        await this.securityAnswer.setValue(answer)
    }

    async clickRegisterButton(){
        await this.registerButton.click()
    }
}

export default new RegistrationPage();