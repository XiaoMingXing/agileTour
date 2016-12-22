const login_page = function () {

    this.inputLoginInfo = function (email, password) {
        element(by.model('dataModel.email')).sendKeys(email);
        element(by.model('dataModel.password')).sendKeys(password);
    };
    this.clickSignIn = function () {
        element(by.css('button[ng-click="login($event)"]')).click();
    }
};
module.exports = new login_page();

