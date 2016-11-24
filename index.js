var express = require('express');
var url111 = require('url');
var path = require('path');

var app = express();
app.use(express.static('public'));

var server = app.listen(8081);

app.get('/views/request.html', function(req,res){
	//res.sendFile(path.join(__dirname + url.parse(res.url).pathname));
	res.sendFile(path.join(__dirname, req.path));
});

app.post('/httprequest/send', function(req, res){
	
});



