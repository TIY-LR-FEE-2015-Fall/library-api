var express = require('express');
var router = express.Router();
var apiRouter = express.Router();
var oauth = require('../oauth');

// var authFilter = require('./filters/auth');

// var register = require('./resources/register');

// apiRouter.use('/register', register);

var books = require('./resources/books');
var checkIns = require('./resources/check-in');

apiRouter.use('/checkIns', checkIns);
apiRouter.use('/books', books);

router.use('/api', apiRouter);

module.exports = router;
