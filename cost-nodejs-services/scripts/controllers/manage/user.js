var express = require('express');
var router = express.Router();
var UserService = require('../../services/manage/user-service');

/* GET users listing. */
router.get('/', UserService.listUsers);
router.post('/', UserService.addUser);
router.delete('/', UserService.deleteUser);
module.exports = router;
