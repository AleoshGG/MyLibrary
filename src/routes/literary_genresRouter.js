const express =  require("express");
const router = express.Router();
const literary_genresController = require("../controllers/literary_genresController.js");

router.get("/", literary_genresController.getGenres);

module.exports = router;