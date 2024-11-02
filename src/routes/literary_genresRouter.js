const express = require("express");
const router = express.Router();
const literary_genresController = require("../controllers/literary_genresController.js");

router.get("/", literary_genresController.getGenres);
router.post("/add", literary_genresController.addGenre);

module.exports = router;
