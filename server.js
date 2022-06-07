const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const booksRouter = require("./routes/books.router")

app.use(bodyParser.json());












app.use(booksRouter);

app.listen(4000, () => {
    console.log("Servern körs på port 4000");
})