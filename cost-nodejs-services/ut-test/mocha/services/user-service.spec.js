"use strict";

var User = require('../../../scripts/models/user');
var expect = require('chai').expect;
var sinon = require('sinon');
var assert = sinon.assert;

describe('User ->', function () {
    it('should be invalid if name is empty', function (done) {
        var user = new User();

        user.validate(function (err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });

    it('should have validation error for if email not correct', function (done) {
        var user = new User({name: "xiao", email: "999"});

        user.validate(function (err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });


    it('should be valid repost if email is valid', function (done) {
        var user = new User({name: "xiao", email: "920@qq.com"});
        user.validate(function (err) {
            expect(err).to.be.a('null');
            done();
        })
    });

    it('should have validation error for findByEmail when email invalid', sinon.test(function () {
        var invalidEmail = "99999";
        var user = new User({name: "xiao", email: invalidEmail});
        this.stub(user, 'findByEmail');
        user.findByEmail();
        assert.called(user.findByEmail);
    }));
});