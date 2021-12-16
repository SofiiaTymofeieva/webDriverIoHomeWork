import MainPage from '../../pages/main.page.js';
import searchPage from '../../pages/search.page.js';
import randomstring from 'randomstring';
import LoginPage from '../../pages/login.page.js';


describe('Search page', () => {
    it('Placed Best Juice Shop Salesman Artwork into basket.', async () => {
        MainPage.open()
        MainPage.openAccountMenu();
        MainPage.navigateToLogin();
        LoginPage.login('severus1234567@gmail.com', 'qwerty');

        

        await searchPage.clickAddToBasket();
        
        await searchPage.clickYourBasketBtn();
    
        await searchPage.clickCheckoutBtn();
        

        await searchPage.clickAddNewAddress();

        await searchPage.addCountryInput('Ukraine');
        await browser.pause(7000);





        // await expect(MainPage.logoutBtn).toBeExisting();
    })
})
