var Mystique = require('mystique');
var Mystique = require('mystique');

var CheckInTransformer = Mystique.Transformer.extend({
  resourceName: 'book',
  mapOut: function(checkIn) {
    return {
      book: checkIn.book,
      checkedInAt: checkIn.checkedInAt,
      checkedOutAt: checkIn.checkedOutAt,
    };
  },

  mapIn(req) {
    return {
      book: req.body.checkIn.book,
      checkedInAt: req.body.checkIn.checkedInAt,
      checkedOutAt: req.body.checkIn.checkedOutAt,
    };
  },
});

Mystique.registerTransformer('CheckIn', CheckInTransformer);
