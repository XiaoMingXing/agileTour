'use strict';



var data_page = function () {
    function generateRandomString() {
        return Math.random().toString(36).substr(2)
    }

    this.getUserName = function () {
        return generateRandomString();
    };

    this.getPassword = function () {
        return generateRandomString();
    };

    this.getEmail = function () {
        return generateRandomString()+ "@qq.com";
    };

};
module.exports = new data_page();