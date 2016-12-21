var login_page = function () {

    this.inputLoginInfo = function (user) {
        element(by.model('dataModel.email')).sendKeys(user.email);
        element(by.model('dataModel.password')).sendKeys(user.password);
    };
    this.clickSignIn = function () {
        element(by.css('button[ng-click="login($event)"]')).click();
    }
};
module.exports = new login_page();

