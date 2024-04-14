
describe('Sign-Up to Trello with Email', async () => {
    it('should open the browser', async () => {
        await browser.url('https://trello.com/home');
        await expect(browser).toHaveTitle('Manage Your Team’s Projects From Anywhere | Trello');
    });
    it('should click sign-up button', async () => {
        let SignUpButton = await $('button[type="submit"]');
        let SignUpEmail = await $('#signup-submit');
        await SignUpButton.click();
        await expect(SignUpEmail).toBeDisplayed();
    });
    it('should add email and go on', async () => {
        let AddEmail = await $('#email');
        
        await AddEmail.addValue('sjdh@gmail.com');
        await SignUpEmail.click();
        await expect(browser).toHaveUrl('https://trello.com/create-first-team');
    });
});
