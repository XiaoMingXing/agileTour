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

});