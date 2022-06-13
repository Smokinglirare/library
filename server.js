const express = require("express");
const bodyParser = require("body-parser");


const port = 4000;
const app = express();

const booksRouter = require("./routes/books.router");

app.use(bodyParser.json());

app.use(booksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
