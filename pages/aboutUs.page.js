import BasePage from '../base/basePage.js'

class AboutUsPage extends BasePage {
    async open(){
        await super.open(`http://localhost:3000/#/about`);
    }
}

export default new AboutUsPage();