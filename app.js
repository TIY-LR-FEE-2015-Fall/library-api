var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();
require('./bootstrap/middleware')(app);
require('./bootstrap/session')(app);
require('./bootstrap/views')(app);
require('./bootstrap/mongo');
require('./bootstrap/mail');
require('./models');
require('./bootstrap/passport')(app);
require('./transformers');

var routes = require('./http/routes');
app.use('/', routes);

require('./bootstrap/errors')(app);

module.exports = app;
