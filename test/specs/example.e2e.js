const LoginPage = require('./pageobjects/login.page');
const SecurePage = require('./pageobjects/secure.page');
const securePage = require('./pageobjects/secure.page');

const expectChai = require('chai').expect;

describe('My Login application', () => {

    before(() => {
        LoginPage.login();
    });

    it('test', () => {
        browser.url('https://www.google.com');
    });

    it('direct to secure page', () => {
        securePage.open();

        expect(SecurePage.title).toBeExisting();
    });
});