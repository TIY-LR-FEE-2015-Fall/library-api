var Mystique = require('mystique');
var Mongoose = require('mongoose');
var ObjectId = Mongoose.Types.ObjectId;

var getIdForModel = function(model, propertyName) {
  var prop = model.get(propertyName);
  if (prop instanceof ObjectId) {
    return prop;
  }

  return prop.get('id');
};

var CheckInTransformer = Mystique.Transformer.extend({
  resourceName: 'checkIn',

  mapOut: function(checkIn) {
    return {
      book: getIdForModel(checkIn, 'book'),
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
