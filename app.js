var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var engine = require('ejs-mate');

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
app.use('/', index);

app.use('/httprequest', require('./routes/httprequest'));
app.use('/test/test', require('./routes/test/test'));

// login
app.use('/login', require('./routes/login/login'));
app.use('/login/login', require('./routes/login/login'));
app.use('/login/reg', require('./routes/login/reg'));
app.use('/login/logout', require('./routes/login/logout'));

// tools
app.use('/tools/index', require('./routes/tools/index'));

// study
app.use('/study/bootstrap3', require('./routes/study/bootstrap3'));

//====================routes set end====================

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', engine);

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
