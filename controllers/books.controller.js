

const model = require("../models/books.models");





 async function getBooks(req, res) {
    const result = await model.findAll();

    res.send(result);
}


async function getBook(req, res) {
    const result = await model.findOne(req.params.id);
    
    res.send(result);
}

async function deleteBook(req, res) {
    const result = await model.deleteOne(req.params.id);

    res.send(result);
} 

async function addBook(req, res) {
    const {name, author} =  req.body;

    const newBook = {
        name,
        author
    }
  const result = await model.addOne(newBook);
    res.json(result);
}

async function updateBook(req, res) {
    const result = await model.updateOne(req.body);

    res.json(result);
}

 

module.exports = {
    getBooks,
    getBook ,
    deleteBook,
    addBook,
    updateBook
  
    
}