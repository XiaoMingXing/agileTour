var frisby = require('frisby');

describe('Test User Sevice APIs', function () {

    it('should list users', function () {

        frisby.create("Test User Service API")
            .get("http://localhost:9001/cost/rest/manage/user")
            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .expectJSON('0', {
                "_id": "584909924ae60b19d8410168",
                "username": "4hy1m58im3kb6sekuia8ld6lxr",
                "password": "cod3t9stg2k77vdr7angq4cxr",
                "email": "kfbj6cgqfp6m7jh4h1x0kvs4i@qq.com",
                "name": "Xiao",
                "__v": 0
            })
            .toss();
    });

});