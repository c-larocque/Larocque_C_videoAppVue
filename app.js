var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var xhb = require('express-handlebars');

var index = require('./routes/index');
//var users = require('./routes/users');
// var details = require('./routes/details');
// var adults = require('./routes/adults');
// var kids = require('./routes/kids');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', xhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//app.use('/users', users);
// app.use('/details', details);
// app.use('/adults', adults);
// app.use('/kids', kids);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
