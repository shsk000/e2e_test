const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    isLogin() {
        const sessionString = browser.sharedStore.get('session');
        return !!sessionString;
    }

    setSessionToSharedStorage() {
        const sessionString = browser.getCookies(['rack.session'])[0].value;
        browser.sharedStore.set('session', sessionString);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(isForceLogin) {
        if (isForceLogin || !this.isLogin()) {
            this.open();

            this.inputUsername.setValue('tomsmith');
            this.inputPassword.setValue('SuperSecretPassword!');
            this.btnSubmit.click();

            this.setSessionToSharedStorage();
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();