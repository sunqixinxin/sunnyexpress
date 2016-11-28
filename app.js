var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('Wilson'));
app.use(session({ secret: 'wilson'}));
app.use(express.static(path.join(__dirname, 'public')));

//====================routes set start====================
var index = require('./routes/index');
var hrequest = require('./routes/httprequest');
app.use('/', index);
app.use('/httprequest', hrequest);

// login
var reg = require('./routes/login/reg');
var login = require('./routes/login/login');
var logout = require('./routes/login/logout');
app.use('/login/reg', reg);
app.use('/login/login', login);
app.use('/login/logout', logout);

// study
var bootstrap3 = require('./routes/study/bootstrap3', bootstrap3);
app.use('/study/bootstrap3', bootstrap3);
//====================routes set end====================

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8000,function(){
    console.log("Server Start!");
});

module.exports = app;
