var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
	req.session.destroy();
	res.redirect('/login/login');
});

module.exports = router;