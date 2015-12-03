var express = require('express');
var router = express.Router();

router.get('/', function(req) {
  return req.store.recordCollection('Book', {
    queryBy: ['year'],
    orderBy: 'year',
  });
});

router.get('/:id', function(req) {
  return req.store.recordItemById('Book', req.params.id);
});

router.post('/', function(req) {
  return req.store.createRecord('Book', { });
});

router.put('/:id', function(req) {
  return req.store.updateRecord('Book', req.params.id);
});

router.delete('/:id', function(req) {
  return req.store.destroyRecord('Book', req.params.id);
});

module.exports = router;
