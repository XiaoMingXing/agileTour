"use strict";

var UserService = require('../../../scripts/services/manage/user-service');
var User = require('../../../scripts/models/user');
var sinon = require('sinon');
var assert = sinon.assert;

describe('User ->', function () {
    var req, res;
    beforeEach(function () {
        req = {
            query: {},
            params: {},
            body: {},
            session: {}
        };
        res = {
            json: sinon.spy(),
            send: sinon.spy()
        };
    });

    it('should invoke findByEmail when login', sinon.test(function (done) {
        this.stub(User.prototype, 'findByEmail', function () {
            return {
                then: function (callback) {
                    callback("success");
                }
            }
        });
        UserService.login(req, res);
        assert.called(User.prototype.findByEmail);
        assert.calledWith(res.send, {status: true, data: "success"});
        done();
    }));

    it('should register failed when user already exist', sinon.test(function (done) {
        //given
        this.stub(User.prototype, 'findByEmail', function () {
            return {
                then: function (callback) {
                    callback({id: "userId"});
                }
            }
        });
        this.stub(User.prototype, 'save', function (callback) {
            callback(null);
        });
        //when
        UserService.register(req, res);
        //then
        assert.called(User.prototype.findByEmail);
        assert.callCount(User.prototype.save,0);
        done();
    }));

    it('should register success when user not exist', sinon.test(function (done) {
        //given
        this.stub(User.prototype, 'findByEmail', function () {
            return {
                then: function (callback) {
                    callback(null);
                }
            }
        });
        this.stub(User.prototype, 'save', function (callback) {
            callback(null);
        });
        //when
        UserService.register(req, res);
        //then
        assert.called(User.prototype.findByEmail);
        assert.callCount(User.prototype.save,0);
        done();
    }));

});