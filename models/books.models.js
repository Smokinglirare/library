const db = require("../config/db");

function findAll() {
    const sql = "SELECT * FROM books";

    db.all(sql, (error, rows) => {
        if (error) {
            console.error(error.message);
        }

        console.log(rows);
    })
}


/*let books = [];

function findAll(){
    return books;
}

function deleteOne(id){
    books = books.filter((book) => book.id !== id);
}
*/

module.exports = {
   // books,
    findAll,
  //  deleteOne
}
