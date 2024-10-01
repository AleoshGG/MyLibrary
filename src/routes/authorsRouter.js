const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController.js");

router.post("/add", authorsController.addAuthor);
router.get("/", authorsController.getAuthor);
router.put("/update/:id", authorsController.updateAuthor);
router.delete("/delete/:id", authorsController.deleteAuthor);

module.exports = router;
