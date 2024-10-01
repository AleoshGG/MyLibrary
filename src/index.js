// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Import routes
const booksRouter = require("./routes/booksRouter.js");
const authorsRouter = require("./routes/authorsRouter.js");

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/books", booksRouter);
app.use("/authors", authorsRouter)

app.listen(3000, () => {
  console.log("Express server running in http://localhost:3000");
});
