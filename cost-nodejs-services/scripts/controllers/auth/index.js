var express = require('express');
var router = express.Router();
var UserService = require('../../services/manage/user-service');
function getData(req) {
    return JSON.parse(Object.keys(req.body)[0]);
}

/* GET home page. */
router.post('/register', UserService.register);
router.post('/login', UserService.login);
router.post('/loginPact', function (req, res) {
    res.json({status: true, data: getData(req)});
});
module.exports = router;
