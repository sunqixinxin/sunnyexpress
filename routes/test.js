var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('test',{title:'主页'});
});

module.exports = router;
