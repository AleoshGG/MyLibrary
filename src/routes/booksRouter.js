const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController.js");

router.post("/add", booksController.addBook);
router.get("/", booksController.getBook);
router.get("/search/:id", booksController.searchBook);
router.get("/searchby/:title", booksController.searchBookByTitle);
router.put("/update/:id", booksController.updateBook);
router.delete("/delete/:id", booksController.deleteBook);

module.exports = router;
