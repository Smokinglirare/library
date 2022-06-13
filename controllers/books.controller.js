

const model = require("../models/books.models");





 async function getBooks(req, res) {
    const result = await model.findAll();

   if (result.length === 0) {
		return res.status(404).json( {error: "Cannot find any books"} );
	}

    res.json({Succes: result});
}


async function getBook(req, res) {
    const result = await model.findOne(req.params.id);

    if (!result) {
        return res.status(404).json({error: "Book doesn't exist"});
      }
    
    res.json({Success: result});
    
}

async function deleteBook(req, res) {
    const result = await model.findOne(req.params.id);

    if (!result) {
        return res.status(404).json({error: "Book doesn't exist"});
      }

    await model.deleteOne(req.params.id);

    res.json({Success: "Deleted book"});
} 

async function addBook(req, res) {
    const {name, author} =  req.body;

    const newBook = {
        name,
        author
    }

    if (!name || !author ) {
		 return res.status(400).json({error: "You have to insert both name and author"});
		
	}

  await model.addOne(newBook);
    res.json({DudeBigSuccess: "Added book"});
}

async function updateBook(req, res) {
    
    const id = req.params.id;
    const result = await model.findOne(req.params.id);


    if (!result) {
        return res.status(404).json({error: "Book doesn't exist"});
	}

    if (!req.body.name || !req.body.author){
        return res.status(400).json({error: "You need to insert both name and author of book"});
    }

    await model.updateOne(id ,req.body);
    res.json({ Success: "Changed book"});
}

async function updateDetailOfBook(req, res) {
    const id = req.params.id;
    const existingBook = await model.findOne(id);

    const newBook = {
        ...existingBook,
    }

    if (req.body.name) {
        newBook.name = req.body.name;
    }

    if (req.body.author) {
        newBook.author = req.body.author;
    }
    
    if (!existingBook) {
        return res.status(404).json({error: "Book doesn't exist"});
      }

    if (!req.body.name && !req.body.author) {
        return res.status(400).json({error: "You have to change either name or author."});
      }

   
     await model.updateOne(id, newBook);


    res.json({Succes:"Changed book"});

}


 

module.exports = {
    getBooks,
    getBook ,
    deleteBook,
    addBook,
    updateBook,
    updateDetailOfBook
  
    
}