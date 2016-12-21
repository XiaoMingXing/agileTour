"use restrict";
var request = require('supertest');
var chai = require('chai');
var expect = require('chai').expect;
var port = process.env.TOMCAT_PORT || 9001;
var baseUrl = 'http://localhost:9001/cost';

describe('Authorization api test', function () {

    var requestBody = {
        "username": "siyu",
        "password": 'password',
        "email": '920477852@qq.com',
        "name": "Xiao"
    };

    it('should return 200 when register user success', function (done) {
        request(baseUrl)
            .post('/rest/auth/register')
            .send(requestBody)
            .expect(200)
            .end(function (err, res) {
                done(err)
            })
    });

    it('should return user details when user login success', function (done) {
        request(baseUrl)
            .post('/rest/auth/login')
            .send({
                email: requestBody.email,
                password: requestBody.password
            })
            .expect(200)
            .expect(function (res) {
                expect(res.body.data.name).to.equal(requestBody.name);
            })
            .end(function (err, res) {
                done(err)
            })
    });

    function generateRandomString() {
        return Math.random().toString(36).substr(2)
    }
});
