const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const page = require('./utils/page.js');
module.exports = function () {

    this.Given(/^open the login page$/, function (done) {
        browser.get('http://localhost:9000/#!/home');
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:9000/#!/home').and.notify(done)
    });
    this.When(/^login with users "([^"]*)" and "([^"]*)"$/, function (username, password, done) {
        page.login.inputLoginInfo(username, password);
        page.login.clickSignIn();
        done();
    });
    this.Then(/^login "([^"]*)"$/, function (LoginResult, done) {
        if (LoginResult === 'successful') {
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:9000/#!/users').and.notify(done);
        }
        else {
            expect(element(by.css('.failed-status')).isPresent()).to.eventually.be.true.and.notify(done);
        }
    });
};