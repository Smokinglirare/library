const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (error) => {
    if (error) {
       console.log(error.message);
      throw error;
    }

    const booksStmt = `
       CREATE TABLE books (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT,
           author TEXT
       )
    `;

    db.run(booksStmt, (error) => {
        if (error) {
            console.error(error.message);
        } else {
            const insert = "INSERT INTO books (name, author) VALUES (?, ?)"
            db.run(insert, ["Den hemliga gåvan", "Natasha Lester",]);
        }
    })

});

module.exports = db;