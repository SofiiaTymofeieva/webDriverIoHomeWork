import AboutUsPage from '../../pages/aboutUs.page.js';

describe('About us page', () => {
    it('should successfully open twitter', async () => {
        await AboutUsPage.open();
        await browser.pause(5000);
        await AboutUsPage.socialFacebookLink.click();
        await browser.pause(5000);

    })
})
