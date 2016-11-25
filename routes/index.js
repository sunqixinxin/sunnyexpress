var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	if(req.cookies.islogin)
	{ 
		console.log('cookies:' + req.cookies.islogin);
		req.session.username = req.cookies.islogin;
	}  

	if(req.session.username)
	{    
	    console.log('session:' + req.session.username);
	    res.locals.username = req.session.username;      
	}
	else
	{
	    res.redirect('/login/login');
	    return;    
	}

	res.render('index',{title:'主页'});
});

module.exports = router;
