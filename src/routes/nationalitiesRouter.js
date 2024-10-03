const express = require("express");
const router = express.Router();
const nationalitiesController = require("../controllers/nationalitiesController.js");

router.get("/", nationalitiesController.getNationalities);

module.exports = router