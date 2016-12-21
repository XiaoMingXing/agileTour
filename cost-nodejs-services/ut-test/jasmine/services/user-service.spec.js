"use strict";

var UserService = require('../../../scripts/services/manage/user-service');
var User = require('../../../scripts/models/user');

describe('User service test ->', function () {
    var req, res;
    var mockUser = {
        username: 'xiaomixin',
        password: 'xiao'
    };

    beforeEach(function () {
        req = {
            body: {}
        };
        res = {
            send: jasmine.createSpy()
        };
    });

    //for login
    it('should failed when password is incorrect', function (done) {
        spyOn(User.prototype, 'findByEmail').andReturn({
            then: function (callback) {
                callback();
            }
        });
        UserService.login(req, res);
        expect(res.send).toHaveBeenCalled();
        done();
    });

    /* it('should return error message when email is not exist', function () {

     });

     it('should pass when user input correct email and password', function () {

     });

     //for register
     it('should return error message when email is exist', function () {

     });

     it('should return error message when username is exist', function () {

     });

     it('should return new registered user when register success', function () {

     });*/

});