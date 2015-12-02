var Mystique = require('mystique');
var Mystique = require('mystique');

var BookTransformer = Mystique.Transformer.extend({
  resourceName: 'book',
  mapOut: function(book) {
    return {
      title: book.title,
      year: book.year,
      isbn: book.isbn,
      author: book.author,
      checkedInAt: book.checkedInAt,
      checkedOutAt: book.checkedOutAt,
    };
  },

  mapIn(req) {
    return {
      title: req.body.book.title,
      year: req.body.book.year,
      isbn: req.body.book.isbn,
      author: req.body.book.author,
      checkedInAt: req.body.book.checkedInAt,
      checkedOutAt: req.body.book.checkedOutAt,
    };
  },
});

Mystique.registerTransformer('Book', BookTransformer);
