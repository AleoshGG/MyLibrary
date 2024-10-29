// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Import routes
const booksRouter = require("./routes/booksRouter.js");
const authorsRouter = require("./routes/authorsRouter.js");
const writingsRouter = require("./routes/writingsRouter.js");
const literary_genresRouter = require("./routes/literary_genresRouter.js");
const nationalitiesRouter = require("./routes/nationalitiesRouter.js");
const readersRouter = require("./routes/readersRouter.js");
const loansRouter = require("./routes/loanRouter.js")

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/writings", writingsRouter);
app.use("/genres", literary_genresRouter);
app.use("/nationalities", nationalitiesRouter);
app.use("/readers", readersRouter);
app.use("/loans", loansRouter);

app.listen(3000, () => {
  console.log("Express server running in http://localhost:3000");
});
