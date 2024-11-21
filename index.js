const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.API_PORT

/* Initializing other routes */
app.use("/", require("./routes/books.js"));

const { randomName, randomSurname, randomTitle, randomYear, randomCategory, getRandomCategories, createRandomBook } = require("./utils/faker.js");

const booksList = [];

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
