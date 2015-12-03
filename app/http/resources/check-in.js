var express = require('express');
var router = express.Router();

router.get('/', function(req) {
  return req.store.recordCollection('CheckIn', {
    queryBy: ['year'],
    orderBy: 'year',
  });
});

router.get('/:id', function(req) {
  return req.store.recordItemById('CheckIn', req.params.id);
});

router.post('/', function(req) {
  return req.store.createRecord('CheckIn', {
    afterSave: (checkIn) => {
      var book = checkIn.book;

      book.checkIns.push(checkIn);
      book.save();
    },
  });
});

router.put('/:id', function(req) {
  return req.store.updateRecord('CheckIn', req.params.id);
});

router.delete('/:id', function(req) {
  return req.store.destroyRecord('CheckIn', req.params.id);
});

module.exports = router;
