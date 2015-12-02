var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();
var cors = require('cors');

app.use(cors());
require('./bootstrap/middleware')(app);
require('./bootstrap/session')(app);
require('./bootstrap/mongo');
require('./app/models');
require('./bootstrap/passport')(app);
require('./app/transformers');
app.use(require('./app/middleware/xmen'));

// app.oauth = require('./app/oauth');
// Currently doesn't need oauth
// app.all('/oauth/token', app.oauth.grant());
var routes = require('./app/http/routes');
app.use('/', routes);

require('./bootstrap/errors')(app);

// app.use(app.oauth.errorHandler());

module.exports = app;
