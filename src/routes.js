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
    handler: (request, h) => {
      return 'Page Get All Books';
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getAllBooksHandler,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: (request, h) => {
      return 'Page Edit Book';
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
