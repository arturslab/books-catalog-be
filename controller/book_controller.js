const express = require('express');
const router = express.Router();
express.json();

const { createId, createRandomBook } = require("../utils/faker.js");

const booksList = [];

exports.createBook = (req, res) => {
    const book = req.body;

    const requiredFields = ["title", "author", "year"];
    for (const field of requiredFields) {
        if (!book[field]) {
            res.status(400).json({ error: `Field ${field} is required` });
            return;
        }
    }

    if (!book.id) book.id = createId(booksList);

    booksList.push(book);

    res.send(book);
    res.status(200).end();
}

exports.getAllBooks = (req, res) => {
    res.send(booksList);
}

exports.getBook = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const book = booksList.find((book) => book.id === id);

    if (!book) {
        res.status(404).json({ error: "Book not found" });
        return;
    }

    res.send(book);
}

exports.updateBook = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const book = req.body;

    const index = booksList.findIndex((book) => book.id === id);

    if (index === -1) {
        res.status(404).json({ error: "Book not found" });
        return;
    }

    booksList[index] = { ...booksList[index], ...book };

    res.send(booksList[index]);
}

exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = booksList.findIndex((book) => book.id === id);

    if (index === -1) {
        res.status(404).json({ error: "Book not found" });
        return;
    }

    booksList.splice(index, 1);

    res.status(204).end();
}

exports.createRandomBook = (req, res) => {
    const book = createRandomBook(booksList);
    booksList.push(book);

    res.send(book);
    res.status(200).end();
}