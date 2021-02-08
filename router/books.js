const express = require('express');
const route = express.Router();

const {
    getBook,
    getBookId,
    postBook,
    putBook,
    deleteBook
} = require('../controller/bookController');

route.get('/api/v1/books', getBook);
route.get('/api/v1/books/:id', getBookId);
route.post('/api/v1/books', postBook);
route.put('/api/v1/books/:id', putBook);
route.delete('/api/v1/books/:id', deleteBook);

module.exports = route;