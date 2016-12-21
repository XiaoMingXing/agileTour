var express = require('express');
var router = express.Router();

/* Health check. */
router.get('/', function (req, res) {
    res.json(true);
});
module.exports = router;
