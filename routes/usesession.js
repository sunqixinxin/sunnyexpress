var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.session.islogin)
	{
		console.log('usesession:' + req.session.islogin);
     	res.locals.islogin = req.session.islogin;    
	}
  	res.render('usesession', { title: '使用session示例' });
});

router.post('/',function(req,res) {
	req.session.islogin = 'success';
  	res.locals.islogin = req.session.islogin;

  	res.render('usesession', { title: '使用session示例' });
});

module.exports = router;
