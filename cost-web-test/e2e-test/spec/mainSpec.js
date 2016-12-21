describe('cost web app', function () {
    var page = require('./utils/page.js');
    var data = require('../../data/dataHelper.js');
    var user = {};
    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;

        browser.get('/#/home');
        var username = data.getUserName();
        var email = data.getEmail();
        var password = data.getPassword();
        user = {
            "username": username,
            "password": password,
            "email": email
        }
    });

    it('should register success', function () {
        page.register.clickRegister();
        //expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/register');
        page.register.inputRegisterInfo(user);
        page.register.clickSignUp();
        console.log('New acquire user is' + user);
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/home')
    });

    it('should login success', function () {
        page.login.inputLoginInfo(user);
        page.login.clickSignIn();
        browser.waitForAngular();
        console.log('Logged in user is' + user);
        expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/products')
    });
});