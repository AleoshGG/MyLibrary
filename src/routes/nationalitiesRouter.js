const express = require("express");
const router = express.Router();
const nationalitiesController = require("../controllers/nationalitiesController.js");

router.get("/", nationalitiesController.getNationalities);
router.post("/add", nationalitiesController.addNationality);

module.exports = router