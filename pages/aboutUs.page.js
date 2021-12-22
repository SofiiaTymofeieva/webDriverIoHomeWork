import BasePage from '../base/basePage.js'
import Button from '../elements/button.js';



class AboutUsPage extends BasePage {
    async open(){
        await super.open(`http://localhost:3000/#/about`);
    }

    get socialFacebookLink(){
        return new Button($('a[href="https://www.facebook.com/owasp.juiceshop"]'), 'Social facebook link element');
    }
}

export default new AboutUsPage();