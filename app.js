var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var hrequest = require('./routes/httprequest');
var subform = require('./routes/subform');
var usesession = require('./routes/usesession');
var usecookies = require('./routes/usecookies');
var usecrypto = require('./routes/usecrypto');
var reg = require('./routes/reg');
var login = require('./routes/login');
var logout = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('Wilson'));
app.use(session({ secret: 'wilson'}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/httprequest', hrequest);
app.use('/subform', subform);
app.use('/usesession', usesession);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);
app.use('/reg', reg);
app.use('/login', login);
app.use('/logout', logout);

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