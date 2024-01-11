const {
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  addBookHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: (request, h) => {
      return 'Page Update Book';
    },
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: (request, h) => {
      return 'Page Delete Book';
    },
  },
];

module.exports = routes;
