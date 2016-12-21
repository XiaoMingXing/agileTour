"use strict";

var UserService = require('../../../scripts/services/manage/user-service');
var User = require('../../../scripts/models/user');
var expect = require('chai').expect;
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
});