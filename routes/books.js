const express = require('express');
const router = express.Router();

const { createBook, getAllBooks, getBook, updateBook, deleteBook, createRandomBook } = require("../controller/book_controller");

router.post("/book", createBook);

router.get("/book", getAllBooks);

router.get("/book/:id", getBook);

router.patch("/book/:id", updateBook);

router.delete("/book/:id", deleteBook);

router.get("/add-random-book", createRandomBook);

module.exports = router;