const db = require("../config/db");

function findAll() {
    const sql = "SELECT * FROM books";
    return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
        if (error) {
            console.error(error.message);
        }
        resolve(rows);
        console.log(rows);
    });
});
}

function findOne(id) {
    const sql = "SELECT * FROM books WHERE id = ?"

    return new Promise((resolve, reject) => {
        db.get(sql, id, (error, rows) => {
            if (error) {
                console.error(error.message);
            }
            resolve(rows);
            console.log(rows);
        })
    })
}




function deleteOne(id){
    const sql = "DELETE FROM books WHERE id = ?";
    return new Promise((resolve, reject) => {
        db.get(sql, id, (error) => {
            if (error){
                console.error(error.message);
            }
            resolve();
        })
    })
}

function addOne(book){
    const sql = "INSERT INTO books (name, author) VALUES (?, ?)";
    
    return new Promise((resolve, reject) => {
        db.run(sql, [book.name, book.author], (error) => {
        if (error) {
            console.error(error.message);
            reject(error);
        }
        resolve();
    })
})
}

function updateOne(id, book){
    const sql = `UPDATE books SET name = 
    ${book.name}, author = ${book.author} 
    WHERE id = ?`;
    
    return new Promise((resolve, reject) => {
        db.run(sql, id, [book.name, book.author], (error) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve();
            
        })
    })
}


module.exports = {
    findAll,
    findOne,
    deleteOne,
    addOne,
    updateOne
}
