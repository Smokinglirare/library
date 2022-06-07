const uuid = require("uuid");

const model = require("../models/books.models");

const { books } = model;

function getBooks(req, res) {
    const result = model.findAll();
    res.json(result);
}

function getBook(req, res) {
    const foundBook = books.find((book) => book.id === req.params.id)

    res.json({
        book: foundBook,
    })
}

function addBook(req, res) {
    books.push({
        id: uuid.v4(),
        name: req.body.name,
        author: req.body.author
    })
    res.json(books);
}

function deleteBook(req, res) {
    model.deleteOne(req.params.id);
    res.json(books);
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    deleteBook
}