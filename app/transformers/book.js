var Mystique = require('mystique');

var BookTransformer = Mystique.Transformer.extend({
  resourceName: 'book',
  mapOut: function(book) {
    return {
      title: book.title,
      year: book.year,
      isbn: book.isbn,
      isbn: book.data.isbn,
    };
  },

  mapIn(req) {
    return {
      title: req.body.book.title,
      year: req.body.book.year,
      isbn: req.body.book.isbn,
      checkedInAt: req.body.book.checkedInAt,
      checkedOutAt: req.body.book.checkedOutAt,
    };
  },
});

Mystique.registerTransformer('Book', BookTransformer);
