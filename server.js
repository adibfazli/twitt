var createError    = require('http-errors');
var express        = require('express');
var path           = require('path');
var cookieParser   = require('cookie-parser');
////////////////////////////////////
var session        = require('express-session');
var passport       = require('passport');
var methodOverride = require('method-override');
var logger         = require('morgan');
////////////////////////////////////
require('dotenv').config();
require('./config/passport');
require('./config/database');
require('./config/cloudinary');
////////////////////////////////////
var indexRouter    = require('./routes/logIn');
var mainRouter     = require('./routes/main');
var postRouter     = require('./routes/posts');
var profileRouter  = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// using express-session
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
// app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use('/', indexRouter);
app.use('/', mainRouter);
app.use('/', postRouter);
app.use('/profile' , profileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
