var frisby = require('frisby');

describe('Test User Sevice APIs ->', function () {

    it('should list users', function () {

        frisby.create("Test User Service API")
            .get("http://localhost:9001/cost/rest/manage/user")
            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .toss();
    });

});