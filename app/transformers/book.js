var Mystique = require('mystique');
var Mystique = require('mystique');

var BookTransformer = Mystique.Transformer.extend({
  resourceName: 'book',
  mapOut: function(book) {
    return {
      id: book.id,
      title: book.title,
      year: book.year,
      isbn: book.isbn,
      author: book.author,
      checkIns: book.checkIns,
    };
  },

  mapIn(req) {
    return {
      title: req.body.book.title,
      year: req.body.book.year,
      isbn: req.body.book.isbn,
      author: req.body.book.author,
    };
  },
});

Mystique.registerTransformer('Book', BookTransformer);
