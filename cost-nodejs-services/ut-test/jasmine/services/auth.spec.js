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
            send: jasmine.createSpy(),
            json: jasmine.createSpy()
        };
    });

    //for login
    it('should invoke findByEmail when call login method', function (done) {
        //given
        spyOn(User.prototype, 'findByEmail').andReturn({
            then: function (callback) {
                callback();
            }
        });
        //when
        UserService.login(req, res);
        //then
        expect(res.send).toHaveBeenCalled();
        done();
    });


    //for register
    it('should register failed when user already exist', function (done) {
        //given
        spyOn(User.prototype, 'findByEmail').andReturn({
            then: function (callback) {
                callback({id: "userId"});
            }
        });
        spyOn(User.prototype, 'save', function (callback) {
            callback(null);
        });
        //when
        UserService.register(req, res);
        //then
        expect(User.prototype.findByEmail).toHaveBeenCalled();
        expect(User.prototype.save).not.toHaveBeenCalled();
        done();
    });

    it('should register success when user not exist', function (done) {
        //given
        spyOn(User.prototype, 'findByEmail').andReturn({
            then: function (callback) {
                callback(null);
            }
        });
        spyOn(User.prototype, 'save', function (callback) {
            callback(null);
        });
        //when
        UserService.register(req, res);
        //then
        expect(User.prototype.findByEmail).toHaveBeenCalled();
        expect(User.prototype.save).not.toHaveBeenCalled();
        done();
    });


});