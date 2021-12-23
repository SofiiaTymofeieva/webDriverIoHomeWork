import MainPage from '../../pages/main.page.js';
import BuyPage from '../../pages/buy.page.js';
import LoginPage from '../../pages/login.page.js';


describe('Search page', () => {
    it('Placed Best Juice Shop Salesman Artwork into basket.', async () => {
        // await browser.setWindowSize(1024, 800);

        await MainPage.open();

        await MainPage.openAccountMenu();
        await MainPage.navigateToLogin();
        await LoginPage.login('severus1234567@gmail.com', 'qwerty');

        await BuyPage.clickAddToBasket();

        await BuyPage.clickYourBasketBtn();
        await browser.pause(2000);

        await BuyPage.clickCheckoutBtn();

        await BuyPage.clickAddNewAddress();

        await BuyPage.enterAddressData(
            'Great Britain',
            'Severus',
            '0938433142',
            '5560',
            'Alley Diagone',
            'London',
            'London',
            );

        await BuyPage.selectAddress();

         expect(BuyPage.addNewAddress).toBeDisplayed();
    })
})
