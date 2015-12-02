var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var BookSchema = new Schema({
  title: {type: String, required: true},
  year: {type: Number, required: true},
  isbn: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  checkedInAt: {type: Date},
  checkedOutAt: {type: Date},
});

module.exports = Mongoose.model('Book', BookSchema);
