var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var BookSchema = new Schema({
  checkedOutAt: {type: Date, required: true},
  checkedInAt: {type: Date},

  book: {type: Schema.Types.ObjectId, ref: 'Book'},
});

module.exports = Mongoose.model('CheckIn', BookSchema);
