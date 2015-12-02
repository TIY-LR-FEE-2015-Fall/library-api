var mongoose = require('mongoose');

var mongoUrl = (process.env.MONGOLAB_URI || 'mongodb://localhost/emberapi');

mongoose.connect(mongoUrl);
