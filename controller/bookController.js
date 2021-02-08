const books = require('../db_book.json');

exports.getBook = (req,res) => {
    return res.status(200).json(books)
};

exports.getBookId = (req,res) => {
    const book = books.find(i => i.id === +req.params.id)
    return res.status(200).json(book)
};

exports.postBook = (req,res) => {
    const idBook = books[books.length - 1].id + 1;
    const {
        isbn, judul, sinopsis, penulis, genre
    } = req.body

    const book = {
        id : idBook,
        isbn,
        judul,
        sinopsis,
        penulis,
        genre
    };

    books.push(book);

    return res.status(201).json(book);
};

exports.putBook = (req,res) => {
    const idBook = req.params.id
    books.filter(book => {
        if (book.id == idBook) {
            book.isbn = req.body.isbn
            book.judul = req.body.judul
            book.sinopsis = req.body.sinopsis
            book.penulis = req.body.penulis
            book.genre = req.body.genre
            return book;
        }
    });

    return res.status(200).json(books);
};

exports.deleteBook = (req,res) => {
    const book = books.filter(index => index.id !== +req.params.id)
    return res.status(200).json(book)
};