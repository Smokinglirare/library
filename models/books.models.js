let books = [];

function findAll(){
    return books;
}

function deleteOne(id){
    books = books.filter((book) => book.id !== id);
}

module.exports = {
    books,
    findAll,
    deleteOne
}