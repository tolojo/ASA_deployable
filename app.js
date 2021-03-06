var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cidadaoRouter = require('./routes/cidadaoRoutes');
var alertaRouter = require('./routes/alertaRoutes');
var psaRouter = require('./routes/psaRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cidadao', cidadaoRouter)
app.use('/alerta',alertaRouter);
app.use('/psa',psaRouter);

module.exports = app;
