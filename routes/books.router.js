const express = require("express");

const booksController = require("../controllers/books.controller");
    const booksRouter = express.Router();

   booksRouter.get("/books", booksController.getBooks)
  booksRouter.get("/:id", booksController.getBook)
  booksRouter.delete("/:id", booksController.deleteBook)
  booksRouter.post("/books", booksController.addBook)
  booksRouter.put("/:id", booksController.updateBook)
    

    module.exports = booksRouter;