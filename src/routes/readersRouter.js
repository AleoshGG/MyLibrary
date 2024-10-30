const express = require("express");
const router = express.Router();
const readersController = require("../controllers/readersController.js");

router.post("/add", readersController.addReader);
router.get("/reader/:name", readersController.getReader);
router.get("/all", readersController.getReaders);
router.delete("/delete/:id", readersController.deleteReader);
router.put("/status", readersController.setStatus);

module.exports = router;