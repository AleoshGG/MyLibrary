const express = require("express");
const router = express.Router();
const writingsController = require("../controllers/writingsController.js");

router.post("/add", writingsController.addWriting);
router.get("/authors/:id", writingsController.getAuthorsByBook);
router.get("/books/:id", writingsController.getBookByAuthor);

module.exports = router;