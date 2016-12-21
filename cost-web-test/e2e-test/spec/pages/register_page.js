var register_page = function () {

    var register = element(by.css('a[href="#register"]'));
    this.clickRegister = function () {
        register.click();
    };
    this.inputRegisterInfo = function (user) {
        element(by.model('dataModel.username')).sendKeys(user.username);
        element(by.model('dataModel.email')).sendKeys(user.email);
        element(by.model('dataModel.password')).sendKeys(user.password);
        element(by.model('dataModel.confirmPassword')).sendKeys(user.password);
    };
    this.clickSignUp = function () {
        element(by.css('button[ng-click="register($event)"]')).click();
        element(by.css('button[ng-click="register($event)"]')).click();
    }

};
module.exports = new register_page();

