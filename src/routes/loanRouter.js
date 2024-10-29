const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController.js");

router.post("/add", loanController.addLoan);
router.get("/reader/:id_reader", loanController.getLoansOfReader);
router.delete("/delete/:id_loan", loanController.deleteLoan);
router.setStatus("/status", loanController.setStatus);

module.exports = router;