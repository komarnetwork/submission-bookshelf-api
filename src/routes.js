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
    handler: editBookByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
