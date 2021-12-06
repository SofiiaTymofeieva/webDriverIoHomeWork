import  MainPage  from '../../pages/main.page.js'
import  LoginPage  from '../../pages/login.page.js'
import  AboutUsPage  from '../../pages/aboutUs.page.js'

describe('OWASP Juice Shop', () => {
    it('should contain logout option in account menu', async () => {
        MainPage.open()
        MainPage.openAccountMenu();
        MainPage.navigateToLogin();
        LoginPage.login('severus@gmail.com', 'qwerty');


        await browser.pause(4000)
        MainPage.openAccountMenu();

        await expect(MainPage.logoutBtn).toBeExisting();
    });

    it('should successfully open About us page', async () => {
            AboutUsPage.open();
            await $('a[aria-label="Button for the Twitter page of the shop"]').click();
// ми отримуємо ерор 
// element click intercepted: Element 
{/* <a _ngcontent-gvq-c124="" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Button for the Twitter page of the shop" 
    style="margin-left: 0px;" href="https://twitter.com/owasp_juiceshop" 
    class="ng-star-inserted">...</a> 
    is not clickable at point (252, 635). 
    Other element would receive the click: 
    <div class="
    cdk-overlay-backdrop 
    cdk-overlay-transparent-backdrop 
    cdk-overlay-backdrop-showing
    "></div> */}

    // звернутися до перент елемента і вказати чайлда не виходить

        })
})

